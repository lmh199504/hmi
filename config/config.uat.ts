import { defineConfig } from "umi";
console.log("uat");
export default defineConfig({
  base: "/",
  define: {
    "process.env.BASE_URL": "/api",
    "process.env.AUTH_URL": "/auth",
  },
});
