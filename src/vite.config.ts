import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: base must match your repo name
export default defineConfig({
  base: '/newme/',
  build: { outDir: 'docs' },
  plugins: [react()]
})
