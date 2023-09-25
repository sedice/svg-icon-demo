import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import path from "path";
import { iconDts } from "./vite/vite-plugin-icon-dts";

export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      // 指定目录
      iconDirs: [path.resolve(process.cwd(), "src/icons")],
      // 使用svg图标的格式
      symbolId: "icon-[dir]-[name]",
    }),
    iconDts({}),
  ],
});
