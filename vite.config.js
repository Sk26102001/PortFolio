import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
 


export default defineConfig({
  base: '/PortFolio/',

  build: {
    outDir: 'dist', // important for GitHub Pages
  },
  plugins: [
    
    tailwindcss(),
    react()
    
  ],
  
});

