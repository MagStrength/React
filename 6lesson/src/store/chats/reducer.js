import * as types from './types'
const initialState = {
    chatList: [
        {
            id: 1,
            name: "One chat",
            messages: [{ text: "Welcome to One chat", author: 'chatbot' }],
        },
        {
            id: 2,
            name: "Two chat",
            messages: [{ text: "Welcome to Two chat!", author: 'chatbot' }],
        },
        {
            id: 3,
            name: "Three chat",
            messages: [{ text: "Welcome to Three chat!", author: 'chatbot' }],
        },
    ]
}

export const chatsReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case types.ADD_CHAT:
            return {
                ...state,
                chatList: [
                    ...state.chatList,
                    payload
                ]
            }

        case types.DELETE_CHAT:
            const delIndex = state.chatList.findIndex((item) => item.id == payload)
            const confDel = window.confirm(`Вы действительно хотите удалить ${state.chatList[delIndex].name}?`)
            if (!confDel) {
                return state
            } else {
                state.chatList.splice(delIndex, 1)

                return {
                    ...state,
                    chatList: [
                        ...state.chatList
                    ]
                }
            }

        case types.ADD_MESSAGE:
            state.chatList.find(item => item.id == payload.chatId).messages.push(payload.message)
            return {
                ...state,
                chatList: [
                    ...state.chatList
                ]
            }

        default:
            return state
    }
}