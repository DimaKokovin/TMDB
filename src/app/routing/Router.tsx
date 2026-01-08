
import {createBrowserRouter} from "react-router-dom";
import {Layout} from "../../components/layout/Layout.tsx";
import {Main} from "../../components/Main/Main.tsx";
import {Search} from "../../components/Search/Search.tsx";
import {CategoryMoviesPopular} from "../../components/movies/CategoryMoviesPopular.tsx";
import {CategoryMoviesTopRated} from "../../components/movies/CategoryMoviesTopRated.tsx";
import {CategoryMoviesUpcoming} from "../../components/movies/CategoryMoviesUpcoming.tsx";
import {CategoryMoviesNowPlaying} from "../../components/movies/CategoryMoviesNowPlaying.tsx";
import {FavoritesPage} from "../../components/favoritesPage/FavoritesPage.tsx";
import {MoreForMoviePages} from "../../components/moreForMoviePages/MoreForMoviePages.tsx";
import {Page404} from "../../components/Page404/Page404.tsx";

export const Router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            { index: true, element: <Main /> },
            { path: '/search', element: <Search /> },
            { path: '/movies/popular', element: <CategoryMoviesPopular /> },
            { path: '/movies/top-rated', element: <CategoryMoviesTopRated/> },
            { path: '/movies/upcoming', element: <CategoryMoviesUpcoming/>},
            { path: '/movies/now-playing', element: <CategoryMoviesNowPlaying/> },
            { path: '/favorit', element: <FavoritesPage/> },
            { path: '/movie/:movieId', element: <MoreForMoviePages/> },
            { path: '/*', element: <Page404/> },
        ]
    }
]);
