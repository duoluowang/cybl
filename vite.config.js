import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { inject } from 'vue'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
 
    proxy:{
      "/cybl/api":{
        target:"http://47.98.62.192:8076/cybl/api",
        changeOrigin:true,
        ws:true,
        rewrite:path=>path.replace(/^\/cybl\/api/, ""),
      },
    }
  },
  plugins: [vue(),inject({
    'window.Quill':['@vueup/vue-quill','Quill'],
    Quill:['@vueup/vue-quill','Quill']
  })],
})
