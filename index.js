require('dotenv').config();

const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const PORT = process.env.PORT || 3000;
const TARGET = process.env.TARGET_URL || 'https://auroratube.himajindayo.workers.dev';

app.use(
  '/',
  createProxyMiddleware({
    target: TARGET,
    changeOrigin: true,
    ws: true,
    on: {
      error: (err, req, res) => {
        console.error('Proxy error:', err.message);
        if (res && !res.headersSent) {
          res.writeHead(502, { 'Content-Type': 'text/plain; charset=utf-8' });
          res.end('Bad Gateway: プロキシ先に接続できませんでした。');
        }
      },
    },
  })
);

app.listen(PORT, () => {
  console.log(`リバースプロキシ起動中 -> http://localhost:${PORT}`);
});
