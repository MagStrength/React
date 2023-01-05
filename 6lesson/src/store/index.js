import { createStore, compose, combineReducers } from 'redux'
import { profileReducer } from './profile/reducer'
import { chatsReducer } from './chats/reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    combineReducers({
        chats: chatsReducer,
        profile: profileReducer,
    }), composeEnhancers()
)