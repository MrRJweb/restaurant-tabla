import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// If deploying to GitHub Pages at https://<user>.github.io/<repo>/,
// set base to "/<repo>/" (e.g. "/restaurant-tabla/"). Keep "/" for
// custom domains, Vercel, or Netlify.
export default defineConfig({
  plugins: [react()],
  base: "/",
});
