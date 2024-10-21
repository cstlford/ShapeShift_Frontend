import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "127.0.0.1",
    watch: {
      usePolling: true, // This will make Vite use polling. This is so live updates work for wsl.
    },
    port: 5173, // Optional: Change the port if needed
  },
});
