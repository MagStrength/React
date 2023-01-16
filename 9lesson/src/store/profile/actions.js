import * as types from './types'

export const changeName = (data) => {
    return {
        type: types.CHANGE_NAME,
        payload: data
    }
}

export const changeVisible = (data) => {
    return {
        type: types.CHANGE_VISIBLE,
        payload: data
    }
}

export const toggleProfile = () => ({
    type: types.TOGGLE_PROFILE
})

export const auth = (auth) => ({
    type: types.IS_AUTH,
    payload: auth
})