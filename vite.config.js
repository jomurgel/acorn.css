import { defineConfig } from "vite";

// Vite is used only to develop and build the demo page. The framework
// itself is plain CSS in src/acorn.css and needs no build to consume.
export default defineConfig(({ mode }) => ({
  base: mode === "development" ? "/" : "/acorn.css/",
}));
