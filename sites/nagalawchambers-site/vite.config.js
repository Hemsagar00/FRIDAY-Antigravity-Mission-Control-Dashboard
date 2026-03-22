import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 4002,
    open: true
  },
  build: {
    outDir: 'dist'
  }
});
