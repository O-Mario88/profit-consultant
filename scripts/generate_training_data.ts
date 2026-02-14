
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Helper to get directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.resolve(__dirname, '../data');

// List of known pack directories (derived from previous findings)
const PACK_DIRS = [
    'bricks', 'beekeeping', 'export_produce', 'plastics', 'fisheries', 'hardware',
    'textile', 'produce_aggregation', 'fmcg', 'stationery', 'water', 'metal',
    'cattle', 'small_ruminants', 'electronics', 'assembly', 'sheep',
    'cropFarming', 'storage_warehousing', 'farm_machinery', 'fashion', 'goat',
    'soap', 'mining', 'furniture', 'piggery', 'spareParts', 'forestry',
    'input_supply', 'crop_farming', 'fnb', 'dairy', 'agri', 'oilGas',
    'produce', 'agro', 'poultry'
];

async function generateData() {
    console.log("Importing Industry Context...");
    const industryContextPath = path.join(DATA_DIR, 'industryContext.ts');
    const industryContext = await import(industryContextPath);

    // Collect all Hooks
    const allHooks = {};
    Object.keys(industryContext).forEach(key => {
        if (key.endsWith('_HOOKS')) {
            allHooks[key] = industryContext[key];
        }
    });

    const combinedData = {
        meta: {
            generatedAt: new Date().toISOString(),
            description: "Training data for Profit Driven Channel LLM"
        },
        vocabulary: {
            hooks: allHooks,
            leakTokens: industryContext.INDUSTRY_LEAK_TOKENS || {},
            lexicons: industryContext.INDUSTRY_LEXICONS || {},
            quizTokens: industryContext.INDUSTRY_QUIZ_TOKENS || {}
        },
        library: [], // Strengths, Shortcomings, KPIs
        questions: [], // Quick Scan, Deep Scan
        actions: {
            snippets: [],
            fixPlans7Day: [],
            fixPlans30Day: []
        }
    };

    console.log(`Scanning ${PACK_DIRS.length} packs...`);

    for (const dir of PACK_DIRS) {
        const packPath = path.join(DATA_DIR, dir, 'index.ts');
        if (!fs.existsSync(packPath)) {
            // console.warn(`Skipping ${dir}: index.ts not found`);
            continue;
        }

        try {
            // Dynamic import
            // Note: In tsx/vite context we can import .ts files directly
            const mod = await import(packPath);

            // Find the export that looks like a pack
            // Packs usually export an object with library, questions, actions
            // or named exports like [DIR]_PACK

            let pack = null;

            // 1. Try named export that ends with _PACK
            const packName = Object.keys(mod).find(k => k.endsWith('_PACK'));
            if (packName && mod[packName]) {
                pack = mod[packName];
            }
            // 2. Try default export if it has the shape
            else if (mod.default && (mod.default.library || mod.default.questions)) {
                pack = mod.default;
            }
            // 3. Try to construct from constituent exports
            else if (mod.library || mod.questions || mod.actions) {
                pack = {
                    library: mod.library,
                    questions: mod.questions,
                    actions: mod.actions
                }
            }

            if (!pack) {
                // console.warn(`Skipping ${dir}: Valid pack structure not found`);
                continue;
            }

            // console.log(`Processing ${dir}...`);

            // Extract Library (Strengths, Shortcomings, KPIs)
            if (Array.isArray(pack.library)) {
                pack.library.forEach(item => {
                    combinedData.library.push({
                        ...item,
                        sourcePack: dir
                    });
                });
            }

            // Extract Questions (Quick Scan, Deep Scan)
            if (Array.isArray(pack.questions)) {
                pack.questions.forEach(q => {
                    combinedData.questions.push({
                        ...q,
                        sourcePack: dir
                    });
                });
            }

            // Extract Actions
            if (pack.actions) {
                if (Array.isArray(pack.actions)) {
                    pack.actions.forEach(action => {
                        const enriched = { ...action, sourcePack: dir };
                        combinedData.actions.snippets.push(enriched);

                        if (Number(action?.days) === 7) {
                            combinedData.actions.fixPlans7Day.push(enriched);
                        } else if (Number(action?.days) === 30) {
                            combinedData.actions.fixPlans30Day.push(enriched);
                        }
                    });
                } else {
                    if (Array.isArray(pack.actions.snippets)) {
                        pack.actions.snippets.forEach(s => combinedData.actions.snippets.push({ ...s, sourcePack: dir }));
                    }
                    if (Array.isArray(pack.actions.fixPlans7Day)) {
                        pack.actions.fixPlans7Day.forEach(p => combinedData.actions.fixPlans7Day.push({ ...p, sourcePack: dir }));
                    }
                    if (Array.isArray(pack.actions.fixPlans30Day)) {
                        pack.actions.fixPlans30Day.forEach(p => combinedData.actions.fixPlans30Day.push({ ...p, sourcePack: dir }));
                    }
                }
            }

        } catch (err) {
            console.error(`Error processing ${dir}:`, err);
        }
    }

    // Output JSON
    const outputPath = path.join(DATA_DIR, 'llm_training_data.json');
    fs.writeFileSync(outputPath, JSON.stringify(combinedData, null, 2));
    console.log(`Successfully wrote training data to ${outputPath}`);
    console.log(`Stats:`);
    console.log(`- Vocabulary Hooks Categories: ${Object.keys(combinedData.vocabulary.hooks).length}`);
    console.log(`- Library Items: ${combinedData.library.length}`);
    console.log(`- Questions: ${combinedData.questions.length}`);
    console.log(`- Action Snippets: ${combinedData.actions.snippets.length}`);
    console.log(`- 7-Day Plans: ${combinedData.actions.fixPlans7Day.length}`);
    console.log(`- 30-Day Plans: ${combinedData.actions.fixPlans30Day.length}`);
}

generateData().catch(console.error);
