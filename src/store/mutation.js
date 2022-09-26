import * as types from './mutation-types.js'

export const mutations = {
    [types.SIGN_IN] (state, user_payload) {
        state.user = user_payload
    }
}