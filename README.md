# PulseGuard AI

Production-grade AI-powered API failure detection and debugging platform.

## Monorepo Structure
- `frontend/` Next.js 15 observability dashboard
- `backend/` FastAPI core APIs + realtime websocket gateway
- `ai-engine/` LLM + embedding-based root-cause and clustering
- `log-ingestion/` stream simulation/ingestion worker
- `anomaly-engine/` rules + statistical anomaly scoring
- `alert-service/` Slack/email/webhook delivery
- `infrastructure/` Docker, Compose, Kubernetes, monitoring, nginx
- `docs/` architecture and deployment docs

## Quick Start
```bash
cp .env.example .env
docker compose up --build
```

Services:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000
- Grafana: http://localhost:3001
- Prometheus: http://localhost:9090

## MVP Capabilities
- Realtime API log ingestion + incident stream
- AI anomaly detection and failure clustering
- AI root-cause analysis with confidence + evidence
- Slack/email/webhook alerting
- Dark-mode observability dashboard and incident assistant

See `docs/architecture.md` for deeper design details.

## UI Testing Pipeline
- Playwright-based parallel UI pipeline with sharding, retries, fail-fast, and deterministic timezone/locale.
- Caching for dependencies and browser binaries in GitHub Actions.
- Rich HTML/JUnit/JSON outputs with trace/video/screenshot artifacts.
- See `docs/ui-testing-pipeline.md` and `.github/workflows/ui-testing.yml`.

- Local live diagnostics: `npm run test:ui:flaky` and `npm run test:ui:live` (from `frontend/`).
