import { defineConfig } from 'vite'
import electron from 'vite-plugin-electron'
import renderer from 'vite-plugin-electron-renderer'
import react from '@vitejs/plugin-react'
import { join } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    electron([
      {
        // Main-Process entry file of the Electron App.
        entry: 'electron/main.ts',
      },
      {
        entry: 'electron/preload.ts',
        onstart(options) {
          // Notify the Renderer-Process to reload the page when the Preload-Scripts build is complete, 
          // instead of restarting the entire Electron App.
          options.reload()
        },
      },

    ]),
    renderer(),
  ],
  build: {
    outDir: 'dist', // Set your output directory
  },
  resolve: {
    alias: {
      // Add this alias to use the entry point for Electron
      'electron': join(__dirname, 'electron/main.ts'), // Replace with main.ts if you use TypeScript
    },
  },
})
