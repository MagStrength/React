import * as types from './types'

export const addChat = (chat) => {
    return {
        type: types.ADD_CHAT,
        payload: chat
    }
}

export const deleteChat = (chatId) => {
    return {
        type: types.DELETE_CHAT,
        payload: chatId
    }
}

export const addMessage = (chatId, message) => {
    return {
        type: types.ADD_MESSAGE,
        payload: {
            chatId: chatId,
            message: message
        }
    }
}

export const addMessageWithReply = (chatId, message) => (dispatch) => {
    dispatch(addMessage(chatId, message))

    if (message.author != 'chatbot') {
        setTimeout(() => {
            dispatch(addMessage(chatId, { author: 'chatbot', text: `Привет, ${message.author}!` }))
        }, 1000)
    }
}