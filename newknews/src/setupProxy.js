const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
  app.use(
      createProxyMiddleware('/api', {
        // target: 'http://182.222.169.20:8000',
        target: "https://3c89-210-106-232-235.jp.ngrok.io",
        changeOrigin: true,
      })
  )
};

