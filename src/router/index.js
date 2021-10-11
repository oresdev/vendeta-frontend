import Vue from 'vue'
import VueRouter from 'vue-router'

// import modules from views folder
import Home from './views/home.vue'
import About from './views/about.vue'
import Plans from './views/plans.vue'
import Launchpool from './views/launchpool.vue'

import _404 from './views/_404.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/plans',
            name: 'Plans',
            component: Plans
        },
        {
            path: '/launchpool',
            name: 'Launchpool',
            component: Launchpool
        },
        {
            path: '*',
            name: '_404',
            component: _404
        }
    ],

    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})

export default router
