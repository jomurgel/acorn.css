import { defineConfig } from "vite";
import path from "path";
import autoprefixer from 'autoprefixer'

export default defineConfig({
  base: '/acorn.css/',
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.ts"),
      name: "style",
    },
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer() // add options if needed
      ],
    }
  }
});