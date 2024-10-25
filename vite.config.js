import { defineConfig } from 'vite';
import astro from '@astrojs/vite-plugin-astro';

export default defineConfig({
  plugins: [astro()],
  resolve: {
    alias: {
      '/styles': '/src/styles',
    },
  },
  build: {
    rollupOptions: {
      external: ['/styles/global.css'],
    },
  },
});
