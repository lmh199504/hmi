export default {
  dev: {
    "/api": {
      target: "http://192.168.203.113:8080/",
      // target:
      //   "http://cds-femain-font.cff1a250d46a741a4822620b7efb9a6f7.cn-hangzhou.alicontainer.com/api/",
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
