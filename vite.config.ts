import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Si vous voulez déployer à la fois sur GitHub Pages et Netlify,
  // vous pouvez utiliser une condition basée sur l'environnement
  base: process.env.GITHUB_PAGES === "true" ? "/asso-autisme/" : "/",
});
