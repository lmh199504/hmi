import { defineConfig } from "umi";
console.log("prod");
export default defineConfig({
  base: "/",
  define: {
    "process.env.BASE_URL": "/api",
    "process.env.AUTH_URL": "/auth",
  },
});
