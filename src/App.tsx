// import './App.css'
// import {Header} from "./components/Header/Header.tsx";
// import {Main} from "./components/Main/Main.tsx";
//
//
// //https://tmdb-kinopoisk.testovoe.app/
//
// export function App() {
//     return (
//         <>
//             <Header/>
//             <Main/>
//         </>
//
//     )
// }
//
//
import {RouterProvider} from "react-router-dom";
import {Router} from "./app/routing/Router.tsx";
import {selectTheme} from "./features/favorites/model/themeMode.ts";
import React from "react";
import {useAppSelector} from "./common/hooks/useAppSelector.ts";
import '@/features/favorites/model/themes.css'
export function App() {


    const theme = useAppSelector(selectTheme);

    // Изменяем атрибут data-theme на root элементе
    React.useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    return <RouterProvider router={Router} />;
}
