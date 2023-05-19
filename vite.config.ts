import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 引入svg需要用到的插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[dir]-[name]',
    }),
  ],
  server: {
    // ← ← ← ← ← ←
    host: '0.0.0.0', // ← 新增内容 ←
  }, // ← ← ← ← ← ←
  resolve: {
    alias: {
      "@": path.resolve("./src") //相对路径别名设置，使用@代替src
    }
  }
})
