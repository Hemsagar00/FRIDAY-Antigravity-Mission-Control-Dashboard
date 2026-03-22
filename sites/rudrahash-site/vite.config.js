import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 4003,
    open: true
  },
  build: {
    outDir: 'dist'
  }
});
