/**
 * We are not going to utilize this for now, but in the future if we want detailed metrics in grafana prometheus, we can utilize this
 */
const express = require('express');
const next = require('next');
const { collectDefaultMetrics, register } = require('prom-client');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Collect default metrics
  collectDefaultMetrics({ timeout: 5000 });

  // Expose metrics endpoint
  server.get('/metrics', (req, res) => {
    res.set('Content-Type', register.contentType);
    res.end(register.metrics());
  });

  // Handle Next.js requests
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, err => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
