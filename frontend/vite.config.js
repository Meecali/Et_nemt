import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // ensures correct routing in production
  build: {
    outDir: 'dist',
  },
});
