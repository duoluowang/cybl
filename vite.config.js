import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    host:'localhost',
    port:8080,
    proxy:{
      "/cybl/api":{
        target:"http://47.98.62.192:8076",
        changeOrigin:true,
        ws:true,
        rewrite:path=>path.replace(/^\/cybl\/api/, ""),
      },
    }
  },
  plugins: [vue()],
})
