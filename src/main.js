import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Welcome from './components/welcome.vue'
import request from './utils/request'
import storage from './utils/storage'



console.log("环境变量=>",import.meta.env)
const app = createApp(App)
app.config.globalProperties.$request = request
app.config.globalProperties.$storage = storage
app.component('Welcome',Welcome)
app.use(router).use(ElementPlus).mount('#app')