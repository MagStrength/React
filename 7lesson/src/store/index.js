import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import { profileReducer } from './profile/reducer'
import { chatsReducer } from './chats/reducer'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
)

export const persistor = persistStore(store)