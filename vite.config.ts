import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves this project from /frontend-to-do-app/.
  // Keep the dev server on / while generating correct production asset URLs.
  base: process.env.NODE_ENV === 'production' ? '/frontend-to-do-app/' : '/',
})
