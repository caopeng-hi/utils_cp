import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "OpenxuiShared",
      fileName: "openxui-shared",
    },

    minify: false,

    rollupOptions: {
      external: [/utils_cp.*/, "vue"],

      output: {},
    },
  },
});
