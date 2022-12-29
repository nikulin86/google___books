import { combineReducers, configureStore } from "@reduxjs/toolkit";
import booksReducer from './booksSlice'

const rootReducer = combineReducers({
    booksReducer: booksReducer,
})

export function setupStore() {
    return configureStore({
        reducer: rootReducer
    })
}



export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
