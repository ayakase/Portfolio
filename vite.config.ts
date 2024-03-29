import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  assetsInclude: ['**/*.glb'],
  server: {port: 5175},
  build: { chunkSizeWarningLimit: 1600, }
})
