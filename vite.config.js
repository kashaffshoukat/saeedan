import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      algorithm: "gzip", // You can change this to 'brotliCompress' for Brotli compression
      ext: ".gz", // This creates compressed files with a .gz extension
      threshold: 10240, // Only compress files larger than 10kb
      deleteOriginFile: false, // Set to true if you want to delete the original uncompressed files after compression
    }),
  ],
});
