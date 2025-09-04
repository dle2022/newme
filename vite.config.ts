import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/newme/',
  build: { outDir: 'docs' },
  plugins: [react()],
})