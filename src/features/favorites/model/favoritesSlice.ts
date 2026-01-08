
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


import { loadFavorites, saveFavorites } from "./favoritesStorage.ts";
import type {FavoriteFilm} from "./types.ts";

type FavoritesState = {
    items: FavoriteFilm[];
};

const initialState: FavoritesState = {
    items: loadFavorites(),
};

export const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    selectors:{
        selectFavorites:(state)=> state.items
    },
    reducers: {
        toggleFavorite(state, action: PayloadAction<FavoriteFilm>) {
            const exists = state.items.some(f => f.id === action.payload.id);

            state.items = exists
                ? state.items.filter(f => f.id !== action.payload.id)
                : [...state.items, action.payload];

            saveFavorites(state.items);
        },
    },
});

export const { toggleFavorite } = favoritesSlice.actions;
export const {selectFavorites} = favoritesSlice.selectors
export const favoritesReducer = favoritesSlice.reducer;
