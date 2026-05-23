import fs from 'node:fs';

const input = process.env.PW_RESULTS_JSON || 'frontend/test-results/results.json';
const output = process.env.FLAKY_REPORT_JSON || 'frontend/test-results/flaky-report.json';

if (!fs.existsSync(input)) {
  console.log(`No test results found at ${input}`);
  process.exit(0);
}

const data = JSON.parse(fs.readFileSync(input, 'utf8'));
const tests = [];

function walkSuite(suite, prefix = '') {
  for (const spec of suite.specs || []) {
    const name = `${prefix}${spec.title}`;
    const runs = spec.tests || [];
    let retriesUsed = 0;
    let failures = 0;

    runs.forEach((run) => {
      retriesUsed += Math.max((run.results?.length || 1) - 1, 0);
      const failed = (run.results || []).some((r) => r.status === 'failed' || r.status === 'timedOut');
      if (failed) failures += 1;
    });

    const instability = runs.length ? retriesUsed / runs.length : 0;
    tests.push({ name, totalRuns: runs.length, retriesUsed, failures, instability });
  }
  for (const child of suite.suites || []) {
    walkSuite(child, `${prefix}${suite.title ? `${suite.title} › ` : ''}`);
  }
}

for (const suite of data.suites || []) walkSuite(suite);

const flaky = tests.filter((t) => t.retriesUsed > 0 || (t.failures > 0 && t.failures < t.totalRuns));
const report = {
  generatedAt: new Date().toISOString(),
  totalTests: tests.length,
  flakyCount: flaky.length,
  retryRate: tests.length ? flaky.reduce((acc, t) => acc + t.retriesUsed, 0) / tests.length : 0,
  flaky
};

fs.writeFileSync(output, JSON.stringify(report, null, 2));
console.log(`Flaky report generated at ${output}`);
