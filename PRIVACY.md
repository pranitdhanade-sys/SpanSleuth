# Privacy Policy

_Last updated: May 23, 2026_

PulseGuard AI processes operational telemetry data (API logs, metrics, traces) to deliver anomaly detection and incident analysis.

## Data Collected
- Account identity data (name, email, role)
- API telemetry (timestamps, endpoints, status codes, latency)
- Incident metadata and analyst notes
- Configuration and alert routing settings

## Data Usage
- Detect anomalies and cluster recurring incidents
- Generate AI-based root-cause analysis recommendations
- Provide dashboard visualizations and historical analytics

## Data Retention
- Hot telemetry: 30 days (PostgreSQL/Redis)
- Aggregated analytics: 180 days
- Audit logs: 365 days

## Security Measures
- Encryption in transit (TLS)
- Least-privilege RBAC
- Signed JWT tokens with expiration
- Secrets provided via environment configuration

## Third-Party Processors
- OpenAI for LLM reasoning on selected incident context
- Optional Slack/email providers for alert notifications

## User Rights
Contact `privacy@pulseguard.local` for access, correction, or deletion requests.
