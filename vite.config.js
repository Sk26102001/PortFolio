import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
 
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  base: isGitHubPages ? '/Portfolio/' : '/',

  build: {
    outDir: 'dist', // important for GitHub Pages
  },
  plugins: [
    
    tailwindcss(),
    react()
    
  ],
  
});

