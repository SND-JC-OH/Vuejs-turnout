import * as types from './mutation-types.js'

export const signIn = ({commit}, user_payload) => {
    commit(types.SIGN_IN, user_payload)
}

export const signOut = ({commit}) => {
    commit(types.SIGN_OUT)
}

export const setEvents = ({commit}, events_payload) => {
    commit(types.SET_EVENT, events_payload)
}