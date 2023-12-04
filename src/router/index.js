import {createRouter,createWebHashHistory} from 'vue-router'
import Home from './../components/Home.vue'
import Welcome from './../views/Welcome.vue'
import Login from '../views/Login.vue'
import User from '../views/system/User.vue'
import Ad from '../views/system/Ad.vue'
import Banner from '../views/system/Banner.vue'
import Dic from '../views/system/Dic.vue'
import Menu from '../views/system/Menu.vue'
import Company from '../views/customer/Company.vue'
import Course from '../views/study/Course.vue'
import Dishes from '../views/food/Dishes.vue'
import News from '../views/infomation/News.vue'
import AddNews from '../views/infomation/AddNews.vue'
import Recruit from '../views/job/Recruit.vue'

import Test from '../views/system/Test.vue'


const routes = [
    {
        name:'home',
        path:'/',
        meta:{
            title:'首页'
        },
        component:Home,
        redirect:'/login',
        children:[
            {
                name:'welcome',
                path:'/welcome',
                meta:{
                    title:'欢迎页'
                },
                component:Welcome,
            },
            {
                name:'user',
                path:'/system/user',
                meta:{
                    title:'用户管理'
                },
                component:User,
            },{
                name:'ad',
                path:'/system/ad',
                meta:{
                    title:'广告管理'
                },
                component:Ad,
            },{
                name:'dic',
                path:'/system/dic',
                meta:{
                    title:'字典管理'
                },
                component:Dic,
            },{
                name:'menu',
                path:'/system/menu',
                meta:{
                    title:'菜单管理'
                },
                component:Menu,
            },{
                name:'banner',
                path:'/system/banner',
                meta:{
                    title:'Banner管理'
                },
                component:Banner,
            },{
                name:'test',
                path:'/system/test',
                meta:{
                    title:'功能测试页面'
                },
                component:Test,
            },{
                name:'course',
                path:'/study/course',
                meta:{
                    title:'课程管理'
                },
                component:Course,
            },{
                name:'news',
                path:'/infomation/news',
                meta:{
                    title:'新闻管理'
                },
                component:News,
            },{
                name:'addnews',
                path:'/infomation/addnews',
                meta:{
                    title:'发布新闻'
                },
                component:AddNews,
            },{
                name:'dishes',
                path:'/food/dishes',
                meta:{
                    title:'菜品管理'
                },
                component:Dishes,
            },{
                name:'company',
                path:'/customer/company',
                meta:{
                    title:'公司管理'
                },
                component:Company,
            },{
                name:'recruit',
                path:'/job/recruit',
                meta:{
                    title:'简历管理'
                },
                component:Recruit,
            }
        ]
    },{
        name:'login',
        path:'/login',
        meta:{
            title:'登陆'
        },
        component:Login,
        // component:()=>import('./../views/Login.vue')
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router