import path from "path";
import proxy from "./proxy";
import { IConfigFromPlugins } from "@@/core/pluginConfig";
import { IConfig } from "@umijs/types";
import theme from "./theme";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const dpjs = require("duplicate-package-checker-webpack-plugin");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const px2rem = require('postcss-px2rem-exclude');


const { REACT_APP_ENV } = process.env;

const baseconfig: IConfigFromPlugins | IConfig = {
  nodeModulesTransform: {
    type: "none",
  },
  locale: {
    default: "zh-CN",
    antd: true,
    title: false,
    baseNavigator: true,
    baseSeparator: "-",
  },
  plugins: ["@alitajs/keep-alive"],
  chunks: ["antds", "vendors", "src", "umi"],
  //需要KeepAlive保存状态的path路径
  keepalive: [
    "/home",
  ],
  chainWebpack: (config) => {
    config.plugin("dpjs").use(dpjs);
    config.merge({
      optimization: {
        splitChunks: {
          chunks: "all", // 提取 chunks 的时候从哪里提取，如果为 all 那么不管是不是 async 的都可能被抽出 chunk，为 initial 则会从非 async 里面提取。
          automaticNameDelimiter: ".", // 文件名分隔符
          name: true, // chunk 的名称，如果设置为固定的字符串那么所有的 chunk 都会被合并成一个，这就是为什么 umi 默认只有一个 vendors.async.js。
          minSize: 30000, // byte, == 30 kb，越大那么单个文件越大，chunk 数就会变少（针对于提取公共 chunk 的时候，不管再大也不会把动态加载的模块合并到初始化模块中）当这个值很大的时候就不会做公共部分的抽取了
          maxSize: 0, // 文件的最大尺寸，优先级：maxInitialRequest/maxAsyncRequests < maxSize < minSize，需要注意的是这个如果配置了，umi.js 就可能被拆开，最后构建出来的 chunkMap 中可能就找不到 umi.js 了。
          minChunks: 1, // 被提取的一个模块至少需要在几个 chunk 中被引用，这个值越大，抽取出来的文件就越小
          maxAsyncRequests: 10, // 在做一次按需加载的时候最多有多少个异步请求，为 1 的时候就不会抽取公共 chunk 了
          maxInitialRequests: 5, // 针对一个 entry 做初始化模块分隔的时候的最大文件数，优先级高于 cacheGroup，所以为 1 的时候就不会抽取 initial common 了。
          cacheGroups: {
            antds: {
              name: "antds",
              chunks: "all",
              test: /^.*node_modules[\\/](@ant-design|antd|@antv|@icons).*$/,
              priority: 10,
            },
            vendors: {
              name: "vendors",
              chunks: "all",
              test: /^.*node_modules[\\/](@babel|react|react-dom|@umijs|lodash|dayjs|moment).*$/,
              priority: 10,
            },
            src: {
              name: "src",
              chunks: "all",
              test: /[\\/]src[\\/]/,
              priority: 10,
            },
          },
        },
      },
    });
    // svg
    config.module.rule("svg").exclude.add(path.resolve("src/icons")).end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(path.resolve("src/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      })
      .end();
    config.module
      .rule("ejs")
      .test(/\.(ejs)$/)
      .use("ejs-loader")
      .loader("ejs-loader")
      .options({
        esModule: false,
      })
      .end();
  },
  routes: [
    { path: "/login", component: "@/pages/login", name: "登录" },
    { path: "/", redirect: "/home" },
    {
      path: "/",
      component: "@/layouts",
      routes: [
        {
          path: "/home",
          component: "@/pages/home",
          name: "首页"
        },
        {
          path: "/moveBox",
          component: "@/pages/moveBox",
          name: "移箱"
        },
        {
          path: "/apply",
          component: "@/pages/apply",
          name: "申请"
        }
      ],
    },
  ],
  fastRefresh: {},
  qiankun: {
    slave: {},
  },
  theme: theme,
  proxy: proxy[REACT_APP_ENV || "dev"],
  dva: {},
  mock: false,
  extraPostCSSPlugins: [
    px2rem({
      remUnit: 192.0,
      exclude: '/node_modules/i',
    }),
  ],
};

export default baseconfig;
