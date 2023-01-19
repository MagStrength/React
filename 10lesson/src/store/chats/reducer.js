import * as types from './types'
const initialState = {
    chatList: []
}

export const chatsReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {

        case types.UPDATE_CHATS:
            return {
                ...state,
                chatList: [
                    ...payload
                ]
            }

        default:
            return state
    }
}