import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.7.10/dist/vue.esm.browser.js'
import Router from 'https://cdn.jsdelivr.net/npm/vue-router@3.6.5/dist/vue-router.esm.browser.js'

import Start from '../views/Start.vue.js'
import Dashboard from '../components/Dashboard.vue.js'
import Signin from '../components/Signin.vue.js'
import Signup from '../components/Signup.vue.js' 

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'Start',
        component: Start,
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
    },
    {
        path: '/signin',
        name: 'signin',
        component: Signin
    },
    {
        path: '/signup',
        name: 'signup',
        component: Signup
    }
]

export default new Router({
    //mode: 'history',
    routes
})