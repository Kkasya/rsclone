const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/auth',
    createProxyMiddleware({
      target: 'http://localhost:8000',
      changeOrigin: true,
      headers: {
        'redirect-url': 'http://localhost:3000/api/auth/google/callback',
        'success-url': 'http://localhost:3000/',
        'failure-url': 'http://localhost:3000/',
      },
      onProxyReq: function (proxyReq, req, res) {
        proxyReq.setHeader("accept-encoding", "identity")
      }
    })
  );
};