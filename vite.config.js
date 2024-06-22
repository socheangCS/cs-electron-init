import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss("./tailwind.config.js"), require("autoprefixer")],
    },
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      external: ["electron"],
    },
  },
});
