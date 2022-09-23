import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.7.10/dist/vue.esm.browser.js'
import App from './App.vue.js'
import router from './router/index.js'
import { auth } from './firebaseApp.js'


auth.onAuthStateChanged(user => {
    if (user) {
        router.push('/dashboard').catch(err => {
            // Ignore the vuex err regarding  navigating to the page they are already on.
            if (
              err.name !== 'NavigationDuplicated' &&
              !err.message.includes('Avoided redundant navigation to current location')
            ) {
              // But print any other errors to the console
              logError(err);
            }
          });
    } else {
        router.replace('/signin').catch(err => {
            // Ignore the vuex err regarding  navigating to the page they are already on.
            if (
              err.name !== 'NavigationDuplicated' &&
              !err.message.includes('Avoided redundant navigation to current location')
            ) {
              // But print any other errors to the console
              logError(err);
            }
          });
    }
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})