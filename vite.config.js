import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    middleware: {
      async handle(req, res, next) {
        if (req.url === "/src/assets/favicon/favicon.ico") {
          res.setHeader("Cache-Control", "max-age=604800, public");
        }
        next();
      },
    },
  },
});
