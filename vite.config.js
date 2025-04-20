import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

export default defineConfig({
  build: {
    outDir: "./dist",
    emptyOutDir: true,
  },
  server: {
    proxy: {
      "/api": "https://plantin-server.onrender.com",
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
  plugins: [react()],
});
