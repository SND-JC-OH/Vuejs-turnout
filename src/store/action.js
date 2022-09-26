import * as types from './mutation-types.js'

export const signIn = ({commit}, user_payload) => {
    commit(types.SIGN_IN, user_payload)
}