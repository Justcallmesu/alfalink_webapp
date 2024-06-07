import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsConfigPath from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsConfigPath(), svgr()],
});
