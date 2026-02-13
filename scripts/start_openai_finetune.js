import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import OpenAI from 'openai';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const trainingFilePath = process.argv[2] || path.join(projectRoot, 'data', 'fine_tuning_pairs.jsonl');
const baseModel = process.env.OPENAI_FINE_TUNE_BASE_MODEL || 'gpt-4.1-mini';
const suffix = (process.env.OPENAI_FINE_TUNE_SUFFIX || 'premium-report-v1')
  .replace(/[^a-zA-Z0-9-_]/g, '')
  .slice(0, 40);

const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) {
  console.error('OPENAI_API_KEY is required.');
  process.exit(1);
}

if (!fs.existsSync(trainingFilePath)) {
  console.error(`Training file not found: ${trainingFilePath}`);
  process.exit(1);
}

const client = new OpenAI({ apiKey });

const run = async () => {
  console.log(`Uploading training file: ${trainingFilePath}`);
  const uploaded = await client.files.create({
    file: fs.createReadStream(trainingFilePath),
    purpose: 'fine-tune'
  });

  console.log(`Uploaded file id: ${uploaded.id}`);
  console.log(`Creating fine-tuning job on model: ${baseModel}`);

  const job = await client.fineTuning.jobs.create({
    model: baseModel,
    training_file: uploaded.id,
    suffix: suffix || undefined
  });

  console.log('Fine-tuning job created:');
  console.log(JSON.stringify({
    id: job.id,
    status: job.status,
    model: job.model,
    fineTunedModel: job.fine_tuned_model || null,
    createdAt: job.created_at
  }, null, 2));

  console.log(`Track progress: openai.fineTuning.jobs.retrieve("${job.id}")`);
  console.log('When completed, set OPENAI_FINE_TUNED_MODEL=<returned model id> on the API server.');
};

run().catch((error) => {
  console.error('Failed to start fine-tune job:', error);
  process.exit(1);
});

