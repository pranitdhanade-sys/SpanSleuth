import { defineConfig, devices } from '@playwright/test';

const CI = !!process.env.CI;
const workers = process.env.PW_WORKERS ? Number(process.env.PW_WORKERS) : undefined;

export default defineConfig({
  testDir: './tests/e2e',
  timeout: 45_000,
  expect: { timeout: 8_000 },
  fullyParallel: true,
  forbidOnly: CI,
  retries: CI ? 2 : 0,
  workers: workers ?? (CI ? '50%' : undefined),
  maxFailures: process.env.FAIL_FAST === '1' ? 1 : undefined,
  reporter: [
    ['list', { printSteps: true }],
    ['junit', { outputFile: 'test-results/junit.xml' }],
    ['json', { outputFile: 'test-results/results.json' }],
    ['html', { outputFolder: 'test-results/html', open: 'never' }]
  ],
  outputDir: 'test-results/artifacts',
  use: {
    baseURL: process.env.BASE_URL ?? 'http://127.0.0.1:3000',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    timezoneId: 'UTC',
    locale: 'en-US'
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } }
  ],
  webServer: {
    command: 'npm run build && npm run start',
    port: 3000,
    reuseExistingServer: !CI,
    timeout: 120_000
  }
});
