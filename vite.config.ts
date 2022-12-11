import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import svgLoader from "vite-svg-loader";
import vitePluginRequire from "vite-plugin-require";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    svgLoader(),
    vitePluginRequire({
      fileRegex: /(.jsx?|.tsx?|.vue)$/,
      translateType: "importMetaUrl",
      // @fileRegex RegExp
      // optional：default file processing rules are as follows
      // fileRegex:/(.jsx?|.tsx?|.vue)$/
      // Conversion mode. The default mode is import
      // importMetaUrl | import
      // importMetaUrl see https://vitejs.cn/guide/assets.html#new-url-url-import-meta-url
      // translateType: "importMetaUrl" | "import";
    }),
  ],
  resolve: {
    alias: {
      find: "@img",
      replacement: fileURLToPath(new URL("./src/assets/img", import.meta.url)),
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
    extensions: [".vue", ".js"],
  },
});
