import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.7.10/dist/vue.esm.browser.js'
import Router from 'https://cdn.jsdelivr.net/npm/vue-router@3.6.5/dist/vue-router.esm.browser.js'

import Start from '../views/Start.vue.js'

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'Start',
        component: Start
    },
]

export default new Router({
    routes
})