import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'utils_cpUi',
      fileName: 'utils_cp-ui',
    },

    minify: false,

    rollupOptions: {
      external: [/utils_cp.*/, 'vue'],
      output: {},
    },
  },
});
