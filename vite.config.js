import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{jsx,js,css,html,png"],
      },
      manifest: {
        name: "Know Me | Website Portofolio",
        short_name: "Know Me",
        start_url: "./index.html",
        description: "Website Portofolio",
        display: "standalone",
        background_color: "#FFFFFF",
        theme_color: "#FAFAFA",
        icons: [
          {
            src: "/public/ic_48.png",
            sizes: "48x48",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/public/ic_72.png",
            sizes: "72x72",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/public/ic_92.png",
            sizes: "92x92",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/public/ic_144.png",
            sizes: "144x144",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/public/ic_192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/public/ic_512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/public/ic_1024.png",
            sizes: "1024x1024",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});