import * as types from './mutation-types.js'

export const mutations = {
    [types.SIGN_IN] (state, user_payload) {
        state.user = user_payload
    },
    [types.SIGN_OUT] (state) {
        state.user = {}
    },
    [types.SET_EVENT] (state, events_payload) {
        state.events = events_payload
    }
}