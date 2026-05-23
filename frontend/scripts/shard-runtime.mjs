import fs from 'node:fs';

const total = Number(process.env.SHARD_TOTAL || '1');
const index = Number(process.env.SHARD_INDEX || '1');
const tests = fs.readFileSync('frontend/tests/e2e/.manifest', 'utf8').split('\n').filter(Boolean);

const shard = tests.filter((_, i) => i % total === index - 1);
console.log(shard.join(' '));
