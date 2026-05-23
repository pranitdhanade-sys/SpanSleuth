# UI Testing Pipeline (Playwright + TypeScript)

## Goals and Priorities
1. Reliability
2. Speed
3. Observability
4. Scalability
5. Developer Experience

## New Enhancements in this revision
- Added flaky analytics report generator (`flaky-analyzer.mjs`) for retry-rate + instability reporting.
- Added SSE live dashboard service (`live-dashboard.mjs`) for near-real-time CI feedback streaming.
- Added test tagging support (`@smoke`, `@critical`) and tag-based commands.
- Added Docker layer cache foundation for preview/canary image builds in CI.
- Added workflow-dispatch shard override input to tune parallelism by workload.
- Enhanced homepage UI with pipeline reliability cards for operator visibility.

## Architecture
```text
Git Push/PR -> CI Controller -> Change Impact Analyzer -> Queue
                                              |            \
                                              |             -> Flaky/History Store
                                              -> Test Shard Planner -> Distributed Runners
                                                                   -> Artifacts + Traces + Metrics
```

## Implemented in this repository
- Parallel test execution with matrix sharding (`browser x shard`).
- Deterministic runtime settings (UTC locale/timezone).
- Fail-fast mode for critical failures.
- Smart selective execution via git-diff gate.
- Cache layers for npm + Playwright browser binaries + Docker layers.
- JUnit + JSON + HTML outputs and failure artifacts.
- Flaky report generation for quarantine automation foundations.
- Foundations for OpenTelemetry endpoint wiring.

## Commands
- `npm run test:ui` run all UI tests.
- `npm run test:ui:tag:smoke` run only smoke test slice.
- `npm run test:ui:tag:critical` run critical-path tests.
- `npm run test:ui:flaky` generate flaky analytics report from Playwright JSON output.
- `npm run test:ui:live` start SSE live dashboard service.

## Best practices
- Avoid shared mutable state between tests.
- Use per-test fixtures and unique test data IDs.
- Mock unstable external networks.
- Retry only known transient classes.
- Keep tests hermetic and idempotent.
