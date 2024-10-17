/* eslint-disable no-undef */
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // Import the path module

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Alias for src
      components: path.resolve(__dirname, 'src/components'), // Alias for components
      hooks: path.resolve(__dirname, 'src/hooks'), // Alias for hooks
      layout: path.resolve(__dirname, 'src/layout'), // Alias for layout
      pages: path.resolve(__dirname, 'src/pages'), // Alias for pages
      routes: path.resolve(__dirname, 'src/routes'), // Alias for routes
      utils: path.resolve(__dirname, 'src/utils'), // Alias for utils
      assets: path.resolve(__dirname, 'src/assets'), // Alias for assets
    },
  },
})
