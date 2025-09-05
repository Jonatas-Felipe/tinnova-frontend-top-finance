import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';
import path from 'path';

import deps from './package.json';

const isTest = process.env.VITEST;

export default defineConfig({
  base: 'http://localhost:3002/',
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
      shared: {
        react: {
          singleton: true,
          requiredVersion: deps.dependencies.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps.dependencies['react-dom'],
        },
        'zustand': {
          singleton: true,
          requiredVersion: deps.dependencies.zustand,
        }
        , 'styled-components': {
          singleton: true,
          requiredVersion: deps.dependencies['styled-components'],
        },
      }
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
