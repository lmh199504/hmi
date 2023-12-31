/* eslint-disable no-undef */
module.exports = {
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          // customize default plugin options
          inlineStyles: {
            onlyMatchedOnce: false,
          },

          // or disable plugins
          removeDoctype: true,
        },
      },
    },
    {
      name: "removeAttrs",
      params: {
        attrs: "(fill|fill-rule|class)",
      },
    },
  ],
};
