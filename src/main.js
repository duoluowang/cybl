import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Welcome from './components/welcome.vue'

import axios from 'axios'
import config from './config'


console.log("环境变量=>",import.meta.env)
const app = createApp(App)

axios.get(config.mockApi+'/login').then(res=>{
    console.log(res)
})

app.component('Welcome',Welcome)
app.use(router).use(ElementPlus).mount('#app')