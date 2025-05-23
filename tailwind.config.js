/**  @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",  // This ensures Tailwind scans all files in src
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  