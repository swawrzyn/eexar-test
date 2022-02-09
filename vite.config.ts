import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import comlink from "vite-plugin-comlink";
import worker, { pluginHelper } from "vite-plugin-worker";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), comlink({
    typeFile: "./src/typings/comlink-workers.d.ts",
  }), pluginHelper(), worker({})],
  base: "/eexar-test/",
});
