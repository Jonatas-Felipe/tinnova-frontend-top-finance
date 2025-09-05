import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';
import path from 'path';

const isTest = process.env.VITEST;

export default defineConfig({
  plugins: [
    !isTest && federation({
      name: 'topFinance',
      remotes: {
        mainFront: {
          type: 'module',
          name: 'mainFront',
          entry: 'http://localhost:3000/assets/remoteEntry.js',
          entryGlobalName: 'mainFront',
          shareScope: 'default',
        },
      },
      exposes: {
        './App': './src/App.tsx',
      },
      filename: 'assets/remoteEntry.js',
      shared: ['react', 'react-dom', 'zustand'],
    }),
    react(),
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  optimizeDeps: {
    exclude: ['main/UserStore'],
  },
  server: {
    port: 3002,
    open: true,
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    exclude: [
      'node_modules/**',
      'dist/**',
      '**/*.config.{js,ts}',
    ],
  },
});
