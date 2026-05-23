import http from 'node:http';
import fs from 'node:fs';

const port = Number(process.env.LIVE_DASHBOARD_PORT || 9393);
const source = process.env.LIVE_DASHBOARD_SOURCE || 'frontend/test-results/flaky-report.json';

const server = http.createServer((req, res) => {
  if (req.url !== '/events') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.end('<h1>UI Test Live Dashboard</h1><p>Connect to <code>/events</code> for SSE.</p>');
    return;
  }

  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    Connection: 'keep-alive'
  });

  const send = () => {
    const payload = fs.existsSync(source)
      ? fs.readFileSync(source, 'utf8')
      : JSON.stringify({ status: 'waiting-for-report' });
    res.write(`data: ${payload}\n\n`);
  };

  const timer = setInterval(send, 3000);
  send();

  req.on('close', () => clearInterval(timer));
});

server.listen(port, () => {
  console.log(`Live dashboard SSE on http://127.0.0.1:${port}/events`);
});
