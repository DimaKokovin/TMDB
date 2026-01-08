
import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import {baseApi} from "./baseApi.tsx";
import { favoritesReducer, favoritesSlice} from "../features/favorites/model/favoritesSlice.ts";
import {themeReducer, themeSlice} from "../features/favorites/model/themeMode.ts";


export const store = configureStore({
    reducer: {
        // [appSlice.name]: appReducer,// loading,theame
        [favoritesSlice.name]: favoritesReducer,
        [themeSlice.name]: themeReducer,
        [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// для возможности обращения к store в консоли браузера
// @ts-ignore
window.store = store
