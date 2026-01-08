
import { createSlice } from "@reduxjs/toolkit";

import { loadTheme, saveTheme } from "./favoritesStorage.ts"

export type ThemeMode = "light" | "dark";

type ThemeState = {
    mode: ThemeMode;
};

const initialState: ThemeState = {
    mode: loadTheme(),
};

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme(state) {
            state.mode = state.mode === "light" ? "dark" : "light";
            saveTheme(state.mode);
        },

    },
    selectors: {
        selectTheme: (state) => state.mode,
    },
});

export const { toggleTheme } = themeSlice.actions;
export const { selectTheme } = themeSlice.selectors;
export const themeReducer = themeSlice.reducer;
