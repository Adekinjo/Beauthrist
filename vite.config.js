import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',  // Adjust this based on your deployment. Use '/' for root, '/Beauthrist' for subfolder
  build: {
    rollupOptions: {
      // Only keep this if you want 'emailjs-com' to be external (e.g., loading from a CDN)
      external: ['emailjs-com'], 
    },
  },
});
