import path from "path";
import { defineConfig } from "vite";
import Components from "unplugin-vue-components/vite";
import laravel from "vite-plugin-laravel";
import resolveExternalsPlugin from "vite-plugin-resolve-externals";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  build: {
    rollupOptions: {
      plugins: [
        resolveExternalsPlugin({
          vue: "Vue",
        }),
      ],
    },
  },
  plugins: [
    vue(),
    Components({
      dirs: [
        path.resolve(__dirname, "vendor/taskday/framework/resources/components"),
      ],
      extensions: ["vue"],
      deep: true,
    }),
    laravel({
      postcss: [
        require("postcss-import"),
        require("tailwindcss/nesting"),
        require("tailwindcss"),
        require("autoprefixer"),
      ],
    }),
  ],
});
