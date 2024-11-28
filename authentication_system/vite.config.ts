import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Optional: Change the development server port
    open: true, // Optional: Automatically open in browser
    hmr: true,  // HMR is enabled by default; this is just for clarity
  },
})
