# PulseGuard AI Architecture

## Event Flow
API Logs -> Queue -> Stream Processor -> Anomaly Engine -> AI Engine -> WebSocket Gateway -> Dashboard.

## Services
- Backend API (FastAPI): auth, incidents, analytics, realtime hub.
- Log ingestion worker: ingestion/simulation and queue publishing.
- Anomaly engine: threshold + statistical anomaly detectors.
- AI engine: embeddings, incident clustering, root cause inference.
- Alert service: notifier fanout to Slack/email/webhook.

## Data Stores
- PostgreSQL: durable relational data (users, incidents, logs, alerts)
- Redis: realtime counters and pub/sub
- ChromaDB: vector index for failure similarity search
