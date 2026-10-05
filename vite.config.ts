import react from '@vitejs/plugin-react';
import {resolve} from 'node:path';
import {defineConfig} from 'vite';

// Deployed as a GitHub Pages project site at https://jsjong98.github.io/MyPage/,
// with one static page per locale: /MyPage/EN/ and /MyPage/KR/.
export default defineConfig({
  base: '/MyPage/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        root: resolve(import.meta.dirname, 'index.html'),
        en: resolve(import.meta.dirname, 'EN/index.html'),
        kr: resolve(import.meta.dirname, 'KR/index.html'),
      },
    },
  },
});
