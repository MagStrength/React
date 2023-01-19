import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { profileReducer } from './profile/reducer'
import { chatsReducer } from './chats/reducer'
import { articlesReducer } from "./articles/reducer";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
    articles: articlesReducer,
})

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)