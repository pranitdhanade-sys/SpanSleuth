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
- Cache layers for npm + Playwright browser binaries.
- JUnit + JSON + HTML outputs and failure artifacts.
- Foundations for OpenTelemetry endpoint wiring.

## Pipeline split
- `unit-integration` job: fast compile/build checks.
- `e2e` job: browser automation in shards.
- `report` job: artifact aggregation and external notifications.

## Flaky detection strategy
- Use retries in CI only.
- Parse `results.json` to compute instability score:
  - `instability = retries_used / total_runs`
- Quarantine policy (recommended): if instability > 0.15 over 20+ runs.

## Caching strategy
- Dependency cache keyed by lockfile hash.
- Playwright binary cache keyed by OS + lockfile hash.
- Extend with remote cache (Nx/Turborepo/Bazel) for monorepo-wide artifacts.

## CI portability templates
- GitHub Actions: first-class (implemented).
- GitLab/Jenkins/Azure: use same stages + matrix semantics from `tools/ci-templates`.

## Benchmark model
Capture before/after and keep under 10 minutes:
- Baseline total runtime
- Post-parallel runtime
- Cache warm runtime
- Flaky retry overhead

## Migration guide (incremental)
1. Land Playwright config + smoke tests.
2. Enable matrix sharding with 2 shards; measure.
3. Increase shards until diminishing returns.
4. Add flaky analytics persistence (DB).
5. Add live dashboard (SSE/WebSocket) from test event stream.

## Best practices
- Avoid shared mutable state between tests.
- Use per-test fixtures and unique test data IDs.
- Mock unstable external networks.
- Retry only known transient classes.
- Keep tests hermetic and idempotent.
