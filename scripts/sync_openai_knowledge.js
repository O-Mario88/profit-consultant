import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import OpenAI from 'openai';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const datasetPath = process.argv[2] || path.join(projectRoot, 'data', 'llm_training_data.json');
const statePath = path.join(projectRoot, 'data', 'openai_knowledge_state.json');

const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) {
  console.error('OPENAI_API_KEY is required.');
  process.exit(1);
}

if (!fs.existsSync(datasetPath)) {
  console.error(`Dataset not found: ${datasetPath}`);
  process.exit(1);
}

const client = new OpenAI({ apiKey });

const readState = () => {
  if (!fs.existsSync(statePath)) return {};
  try {
    return JSON.parse(fs.readFileSync(statePath, 'utf8'));
  } catch {
    return {};
  }
};

const writeState = (state) => {
  fs.writeFileSync(statePath, JSON.stringify(state, null, 2));
};

const ensureVectorStore = async () => {
  const saved = readState();
  const envId = process.env.OPENAI_VECTOR_STORE_ID;
  const vectorStoreId = envId || saved.vectorStoreId;

  if (vectorStoreId) {
    try {
      const existing = await client.vectorStores.retrieve(vectorStoreId);
      console.log(`Using existing vector store: ${existing.id} (${existing.name})`);
      return existing;
    } catch {
      console.warn(`Saved vector store ${vectorStoreId} not found. Creating a new one.`);
    }
  }

  const created = await client.vectorStores.create({
    name: process.env.OPENAI_VECTOR_STORE_NAME || 'profit-driven-knowledge'
  });
  console.log(`Created vector store: ${created.id}`);
  return created;
};

const removePreviousDatasetFiles = async (vectorStoreId, sourceName) => {
  const toDelete = [];
  for await (const file of client.vectorStores.files.list(vectorStoreId)) {
    if (file.attributes?.dataset_source === sourceName) {
      toDelete.push(file.id);
    }
  }

  for (const fileId of toDelete) {
    await client.vectorStores.files.delete(fileId, { vector_store_id: vectorStoreId });
    console.log(`Detached old vector file: ${fileId}`);
  }
};

const run = async () => {
  const vectorStore = await ensureVectorStore();
  const sourceName = path.basename(datasetPath);
  await removePreviousDatasetFiles(vectorStore.id, sourceName);

  const uploadedFile = await client.files.create({
    file: fs.createReadStream(datasetPath),
    purpose: 'assistants'
  });
  console.log(`Uploaded file: ${uploadedFile.id}`);

  const attached = await client.vectorStores.files.createAndPoll(vectorStore.id, {
    file_id: uploadedFile.id,
    attributes: {
      dataset_source: sourceName,
      dataset_role: 'report_grounding'
    }
  });

  if (attached.status !== 'completed') {
    throw new Error(`Vector store ingestion finished with status: ${attached.status}`);
  }

  const state = {
    vectorStoreId: vectorStore.id,
    vectorFileId: attached.id,
    datasetPath,
    uploadedFileId: uploadedFile.id,
    syncedAt: new Date().toISOString()
  };
  writeState(state);

  console.log('Knowledge sync complete.');
  console.log(JSON.stringify(state, null, 2));
  console.log(`Set OPENAI_VECTOR_STORE_ID=${vectorStore.id} in your server environment.`);
};

run().catch((error) => {
  console.error('Failed to sync knowledge:', error);
  process.exit(1);
});

