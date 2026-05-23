import { execSync } from 'node:child_process';

const baseRef = process.env.BASE_REF || 'origin/main';
const changed = execSync(`git diff --name-only ${baseRef}...HEAD`, { encoding: 'utf8' })
  .split('\n')
  .filter(Boolean);

const frontendChanged = changed.some((f) => f.startsWith('frontend/'));
if (!frontendChanged) {
  console.log('SKIP_UI_TESTS=1');
  process.exit(0);
}

console.log('SKIP_UI_TESTS=0');
