import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Category from '@/pages/Category'
import Car from '@/pages/Car'
import My from '@/pages/My'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/category',
            name: 'Category',
            component: Category,
        },
        {
            path: '/car',
            name: 'Car',
            component: Car
        },
        {
            path: '/my',
            name: 'My',
            component: My
        },
    ]
})
