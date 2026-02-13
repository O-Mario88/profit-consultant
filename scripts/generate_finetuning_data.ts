
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.resolve(__dirname, '../data');
const SOURCE_JSON = path.join(DATA_DIR, 'llm_training_data.json');
const OUTPUT_JSONL = path.join(DATA_DIR, 'fine_tuning_pairs.jsonl');

function formatIndustryName(packName) {
    // Simple formatter, can be improved
    return packName.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

function generateFineTuning() {
    if (!fs.existsSync(SOURCE_JSON)) {
        console.error("Source JSON not found.");
        return;
    }

    const rawData = fs.readFileSync(SOURCE_JSON, 'utf-8');
    const data = JSON.parse(rawData);

    const questions = data.questions || [];
    const trainingLines = [];

    let count = 0;

    questions.forEach(q => {
        if (q.textA && q.textB && q.pillar) {
            const industry = formatIndustryName(q.sourcePack || 'general');

            // Construct the training example
            // Using standard Chat format for OpenAI/Gemini
            const example = {
                messages: [
                    {
                        role: "system",
                        content: "You are an expert business consultant. Create forced-pair assessment questions that reveal hidden profit leaks."
                    },
                    {
                        role: "user",
                        content: `Generate a forced pair for the ${q.pillar} Pillar for a ${industry} business.`
                    },
                    {
                        role: "assistant",
                        content: `Option A: ${q.textA}\nOption B: ${q.textB}`
                    }
                ]
            };

            trainingLines.push(JSON.stringify(example));
            count++;
        }
    });

    fs.writeFileSync(OUTPUT_JSONL, trainingLines.join('\n'));
    console.log(`Successfully generated ${count} fine-tuning examples to ${OUTPUT_JSONL}`);
}

generateFineTuning();
