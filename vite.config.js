import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
 


export default defineConfig({
  base: '/portfolio/',

  build: {
    outDir: 'dist', // important for GitHub Pages
  },
  plugins: [
    
    tailwindcss(),
    react()
    
  ],
  
});

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// // Set base only for GitHub Pages
// const isGitHubPages = process.env.GITHUB_PAGES === 'true';

// export default defineConfig({
//   base: isGitHubPages ? '/portfolio/' : '/',
//   build: {
//     outDir: 'dist',
//   },
//   plugins: [tailwindcss(), react()],
// });
