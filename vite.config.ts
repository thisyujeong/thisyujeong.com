import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/styles/function.scss" as *;
          @use "@/styles/variables.scss" as *;
        `,
      },
    },
  },
  server: {
    proxy: {
      '/api': 'http://localhost:5174',
    },
  },
});
