<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Assessment-Only Build

This repository is now scoped to:
- Quick Scan assessment
- Quick Scan report (Mission Brief)
- Deep Scan assessment
- Deep Scan report

All marketplace/course/consultant/blog/ad-management surfaces were removed.

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Create env file:
   `cp .env.example .env.local`
3. Configure backend environment variables:
   - `OPENAI_API_KEY=...`
   - Note: `GEMINI_API_KEY` is legacy and is not used by this build.
   - Optional: `API_PORT=8787`
   - Optional: `OPENAI_REPORT_MODEL=gpt-4o-mini`
   - Optional: `OPENAI_DEEP_SCAN_MODEL=gpt-4o-mini`
   - Optional: `OPENAI_ASSESSMENT_MODEL=gpt-4o`
   - Optional: `OPENAI_FINE_TUNED_MODEL=<ft-model-id>`
   - Optional: `OPENAI_VECTOR_STORE_ID=<vs-id>`
   - Optional: `API_RATE_MAX=120`
   - Optional: `API_RATE_WINDOW_MS=60000`
4. Run frontend + backend together:
   `npm run dev:all`
5. Run only the frontend (if backend is already running):
   `npm run dev`

## AI Integration

The app now uses a server-only AI pipeline:
- `data/llm_training_data.json` is indexed on the backend for retrieval-grounded report generation.
- Quick Scan and Deep Scan outputs are generated using OpenAI with dataset evidence injected per pillar.
- Client code no longer builds report prompts directly against OpenAI credentials.

### Backend Routes
- `POST /api/ai/chat/completions`
- `POST /api/ai/images/generate`
- `POST /api/ai/models/generate-content`
- `POST /api/ai/knowledge/search`
- `POST /api/ai/report/generate`
- `POST /api/ai/report/deep-scan`
- `POST /api/assessment/quick-scan`
- `POST /api/assessment/deep-scan`
- `POST /api/assessment/full-report`
- `POST /api/assessment/adaptive`
- `POST /api/assessment/adaptive/questions`
- `GET /api/ai/knowledge/status`
- `GET /api/health`

### Optional: Sync Data Folder To OpenAI File Search
1. `npm run ai:sync-knowledge`
2. Copy printed vector store id into `OPENAI_VECTOR_STORE_ID`
3. Restart API server

This enables OpenAI file-search grounding in addition to local retrieval.

### Optional: Start Fine-Tuning Job
1. Ensure `data/fine_tuning_pairs.jsonl` is ready.
2. (Optional) Set `OPENAI_FINE_TUNE_BASE_MODEL` and `OPENAI_FINE_TUNE_SUFFIX`.
3. Run: `npm run ai:start-finetune`
4. When job succeeds, set `OPENAI_FINE_TUNED_MODEL` and restart the API server.
