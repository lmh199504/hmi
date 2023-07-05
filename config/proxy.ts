export default {
  dev: {
    "/api": {
      target: "http://192.168.203.113:8080/",
      changeOrigin: true,
      pathRewrite: { "^/api": "" },
    },
  },
  test: {
    "/api": {
      target: "http://192.168.203.113:8080/",
      changeOrigin: true,
      pathRewrite: { "^/api": "" },
    },
  },
  pre: {
    "/api": {
      target: "http://192.168.203.113:8080/",
      changeOrigin: true,
      pathRewrite: { "^/api": "" },
    },
  },
};
