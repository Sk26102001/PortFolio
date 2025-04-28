import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  base: '/PORTFOLIO/', // important for GitHub Pages
  build: {
    outDir: 'dist', // important for GitHub Pages
  },
  plugins: [
    
    tailwindcss(),
    react()
    
  ],
  
});

