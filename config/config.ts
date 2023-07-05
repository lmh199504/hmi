import { defineConfig } from "umi";
import baseConfig from "./baseconfig";
console.log("dev");
export default defineConfig({
  base: "/",
  define: {
    "process.env.BASE_URL": "/api",
    "process.env.AUTH_URL": "/auth",
  },
  ...baseConfig,
});
