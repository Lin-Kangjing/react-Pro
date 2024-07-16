/*
 * @Date: 2024-06-27 14:27:34
 * @LastEditors: LinKangjing linkangjing@foxmail.com
 * @LastEditTime: 2024-07-08 17:16:43
 * @FilePath: \react-Pro\vite.config.ts
 * @Description: 
 */
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tsconfigPaths from "vite-tsconfig-paths"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // 同步tsconfig.json的path设置alias
    tsconfigPaths(),
  ],
  css: {
    // 开css sourcemap方便找css
    devSourcemap: true,
  },
  // server: {
  //   // 自动打开浏览器
  //   open: true,
  //   host: true,
  //   port: 3001,
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:3000',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ''),
  //     },
  //   },
  // },
  build: {
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        // 生产环境移除console
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
})
