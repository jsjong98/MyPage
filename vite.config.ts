import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';

// Deployed as a GitHub Pages project site at https://jsjong98.github.io/MyPage/
export default defineConfig({
  base: '/MyPage/',
  plugins: [react()],
});
