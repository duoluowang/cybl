import {createRouter,createWebHashHistory} from 'vue-router'
import Home from './../components/Home.vue'
import Welcome from './../views/Welcome.vue'
import Login from '../views/Login.vue'

const routes = [
    {
        name:'home',
        path:'/',
        meta:{
            title:'首页'
        },
        component:Home,
        redirect:'/welcome',
        children:[
            {
                name:'welcome',
                path:'/welcome',
                meta:{
                    title:'欢迎页'
                },
                component:Welcome,
            },
        ]
    },{
        name:'login',
        path:'/login',
        meta:{
            title:'登陆'
        },
        component:()=>import('./../views/Login.vue')
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router