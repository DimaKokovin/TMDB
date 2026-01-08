


import type {FavoriteFilm} from "./types.ts";
import type {ThemeMode} from "./themeMode.ts";

export const loadFavorites = (): FavoriteFilm[] => {
    try {
        const data = localStorage.getItem("favorites");
        return data ? JSON.parse(data) : [];
    } catch {
        return [];
    }
};

export const saveFavorites = (favorites: FavoriteFilm[]) => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
};







export const loadTheme = (): ThemeMode => {
    try {
        const data = localStorage.getItem("theme");
        return data === "dark" ? "dark" : "light";
    } catch {
        return "light";
    }
};

export const saveTheme = (theme: ThemeMode) => {
    localStorage.setItem("theme", theme);
};
