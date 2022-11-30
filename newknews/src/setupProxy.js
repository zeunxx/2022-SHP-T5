const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "https://fde6-210-106-232-212.jp.ngrok.io",
      changeOrigin: true,
    })
  );
};
