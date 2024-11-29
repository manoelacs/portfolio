import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import path from 'path';

const { VITE_PORT } = loadEnv('development', process.cwd());

// https://vite.dev/config/
export default defineConfig({  
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: Number.parseInt(VITE_PORT),
  },
});
