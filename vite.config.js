import { defineConfig } from "vite";
import autoprefixer from 'autoprefixer'

export default defineConfig(({ mode }) => {
  const config = {
    base: mode === 'development' ? '/' : '/acorn.css/',
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