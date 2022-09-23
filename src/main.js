import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.7.10/dist/vue.esm.browser.js'
import App from './App.vue.js'
import router from './router/index.js'
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})