import {baseApi} from "../../../app/baseApi.tsx";
import type { FilmWithMoreDate, MovieCredits, PopularFilmsResponse} from "./filmsApi.type.ts";


export const filmsApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        // getPopularFilm: build.query<PopularFilmsResponse,void>({
        //     query: () => ({
        //         method: 'GET',
        //         url:'movie/popular',
        //         params:{
        //
        //         }
        //     })  //картинка на главное
        // есть повторение useGetPopularFilmQuery и useGetPopularMovieQuery. стоит ли это исправлять?
        //исправил
        //
        //
        // }),
        getSearchMovie: build.query<PopularFilmsResponse,{page:number,searchTerm:string}>({
            query: ({searchTerm,page = 1}) => ({
                method: 'GET',
                url:'search/movie',
                params:{
                    api_key:import.meta.env.VITE_API_KEY,
                    query:searchTerm,
                    page
                } // запрос на получение фильма по поиску
            })
        }),
        getPopularMovie: build.query<PopularFilmsResponse,{page?:number}>({
            query: ({page = 1}) => ({
                method: 'GET',
                url:'movie/popular',
                params:{
                    api_key:import.meta.env.VITE_API_KEY,
                    page

                }
            })
        }),
        getTopRaredMovie: build.query<PopularFilmsResponse,{page?:number}>({
            query: ({page = 1}) => ({
                method: 'GET',
                url:'movie/top_rated',
                params:{
                    api_key:import.meta.env.VITE_API_KEY,
                    page

                }
            })
        }),
        getUpcomingMovie: build.query<PopularFilmsResponse,{page?:number}>({
            query: ({page = 1}) => ({
                method: 'GET',
                url:'movie/upcoming',
                params:{
                    api_key:import.meta.env.VITE_API_KEY,
                    page
                }
            })
        }),
        getNowPlayingMovie: build.query<PopularFilmsResponse,{page?:number} >({
            query: ({page = 1}) => ({
                method: 'GET',
                url:'movie/now_playing',
                params:{
                    api_key:import.meta.env.VITE_API_KEY,
                    page

                }
            })
        }),
        getMoreForMovie: build.query<FilmWithMoreDate,{movie_id:number} >({
            query: ({movie_id}) => ({
                method: 'GET',
                url:`movie/${movie_id}`,
                params:{
                    api_key:import.meta.env.VITE_API_KEY,


                }
            })
        }),
        getMovieActors: build.query<MovieCredits,{movie_id:number} >({
            query: ({movie_id}) => ({
                method: 'GET',
                url:`movie/${movie_id}/credits`,
                params:{
                    api_key:import.meta.env.VITE_API_KEY,


                }
            })
        }),
        getMovieSimilar: build.query<PopularFilmsResponse,{movie_id:number} >({
            query: ({movie_id}) => ({
                method: 'GET',
                url:`movie/${movie_id}/similar`,
                params:{
                    api_key:import.meta.env.VITE_API_KEY,


                }
            })
        }),


    }),
})

export const {
    // useGetPopularFilmQuery,
    useGetSearchMovieQuery,
    useGetPopularMovieQuery,
    useGetTopRaredMovieQuery,
    useGetUpcomingMovieQuery,
    useGetNowPlayingMovieQuery,
    useGetMoreForMovieQuery,
    useGetMovieActorsQuery,
    useGetMovieSimilarQuery,

} = filmsApi







