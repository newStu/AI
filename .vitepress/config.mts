import { defineConfig } from "vitepress";
import AIModels from "../AI_models/index";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AI",
  description: "AI 学习项目",
  base: "/AI/",
  srcDir: ".",
  outDir: "dist",
  head: [["link", { rel: "icon", href: "/AI/public/icon.svg" }]],
  themeConfig: {
    outlineTitle: "页面导航",
    search: {
      provider: "local",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      { text: "AI 模型", link: "/AI_models/" },
    ], 
    sidebar: {
      "/AI_models/": AIModels,
    }, 
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ], 
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024-present WW And PP",
    },
  },
});
