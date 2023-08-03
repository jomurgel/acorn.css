import { defineConfig } from "vite";
import autoprefixer from 'autoprefixer'

export default defineConfig((test) => {
  // Update base to '/' for dev/local preview.
  const config = {
    base: '/acorn.css/',
    css: {
      postcss: {
        plugins: [
          autoprefixer() // add options if needed
        ],
      }
    }
  };

  return config;
});