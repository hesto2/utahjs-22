import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';
import polyfillNode from 'rollup-plugin-polyfill-node';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgrPlugin()],
  base: process.env.ASSET_URL ? `${process.env.ASSET_URL}/` : undefined,
  build: {
    rollupOptions: {
      plugins: [polyfillNode()],
    },
  },
  optimizeDeps: {},
});
