const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/dev',
    createProxyMiddleware({
      target: 'https://ar4d5kn2me.execute-api.us-east-1.amazonaws.com',
      changeOrigin: true,
    })
  );
};
