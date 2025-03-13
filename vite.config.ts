import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      // Options d'optimisation des images
      png: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
      webp: {
        lossless: true,
      },
    }),
  ],
  // Si vous voulez déployer à la fois sur GitHub Pages et Netlify,
  // vous pouvez utiliser une condition basée sur l'environnement
  base: process.env.GITHUB_PAGES === "true" ? "/asso-autisme/" : "/",
  build: {
    // Options d'optimisation supplémentaires pour le build
    minify: "terser",
    cssMinify: true,
    reportCompressedSize: true,
    rollupOptions: {
      output: {
        manualChunks: {
          // Divise le bundle pour améliorer les performances
          vendor: ["react", "react-dom", "react-router-dom"],
          i18n: ["i18next", "react-i18next"],
        },
      },
    },
  },
});
