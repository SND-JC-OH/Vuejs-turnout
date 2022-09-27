import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.7.10/dist/vue.esm.browser.js'
import Vuex from 'https://cdn.jsdelivr.net/npm/vuex@3.6.2/dist/vuex.esm.browser.js'
import { mutations } from './mutation.js'
import * as actions from './action.js'
Vue.use(Vuex)

const state = {
    user: {},
    events: [],
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})