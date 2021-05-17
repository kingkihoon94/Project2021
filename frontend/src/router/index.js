import Vue from 'vue'
import Router from 'vue-router'
//import Router
import Main from '@/views/test/Main.vue'
//import Component

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main
    },
]
//path 와 component 엮어주는 부분.

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
//main.js에서 사용할 router를 정의하는 부분.


export default router