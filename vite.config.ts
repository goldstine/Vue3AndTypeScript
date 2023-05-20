import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 引入svg需要用到的插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
// https://vitejs.dev/config/

//mock插件提供方法
import { viteMockServe } from 'vite-plugin-mock'
export default defineConfig(({command}) => {
  return {
    plugins: [
      vue(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),
      viteMockServe({
        localEnabled: command === 'serve', //保证开发阶段可以使用mock接口
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
    },
    // scss全局变量的一个配置
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";',
        },
      },
    }
  }
})
