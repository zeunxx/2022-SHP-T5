const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://182.222.169.20:8000",
      changeOrigin: true,
    })
  );
};
