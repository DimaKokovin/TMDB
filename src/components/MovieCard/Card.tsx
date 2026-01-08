import s from './Card.module.css'
import type {PopularFilmsResponse} from "../../features/films/api/filmsApi.type.ts";
import {NavLink} from "react-router-dom";
import {useAppDispatch} from "../../common/hooks/useAppDispatch.ts";
import type {RootState} from "../../app/store.ts";
import {useAppSelector} from "../../common/hooks/useAppSelector.ts";
import {toggleFavorite} from "../../features/favorites/model/favoritesSlice.ts";
import type {FavoriteFilm} from "../../features/favorites/model/types.ts";


type Cardprops = {
    data: PopularFilmsResponse
    titleSection: string
    flagForMain: boolean
    flagForButtonViewMore: boolean
    PuthForLinks?: string
}



export const Card = (props: Cardprops) => {
    // const [isFavorite, setIsFavorite] = useState<boolean>(false);
    // const handleFavoriteClick = () => {
    //     setIsFavorite(prev => !prev);
    // };

    // const { data } = useGetPopularMovieQuery();
    // const { data } = props.hook();

    const dispatch = useAppDispatch()
    // const favorites = useAppSelector(selectFavorites)
    //const isFavorite = (id: number) => favorites.some(f => f.id === id);


    const selectFavorites = (state: RootState) => state.favorites.items;
    const favorites = useAppSelector(selectFavorites);
    const isFavorite = (id: number) => favorites.some(f => f.id === id);

    const handleFavoriteClick = (film: FavoriteFilm) => {
        dispatch(toggleFavorite(film));
    };


    // Обрезаем данные на клиенте, ограничивая вывод 6 фильмами
    const limitedData = props.flagForMain ? props.data?.results.slice(0, 6) : props.data?.results


    const handleClick = () => {
        window.scrollTo(0, 0); // Прокручиваем страницу вверх при клике
    };// не работает


    return (
        <div className={s.cardSection}>

            <div className={s.cardHeader}>
                <h2 >
                    {props.titleSection}
                </h2>

                {props.flagForButtonViewMore && props.PuthForLinks &&
                    <NavLink to={props.PuthForLinks} className={s.navLinkButton} onClick={handleClick}>View
                        more</NavLink>}
            </div>

            <div className={s.cardsContainer}>
                {limitedData?.map((film) => {
                    // const favorite = isFavorite(film.id)
                    return (
                        <div key={film.id} className={s.cardContainer}>
                            <div>
                               <NavLink to={`/movie/${film.id}`}>
                                   {film.poster_path ? <img
                                       src={`https://image.tmdb.org/t/p/w200/${film.poster_path}`}
                                       alt="poster"
                                   /> : <img src="https://placehold.co/200x300?text=Non\nPoster" alt="Non poster"/>}
                               </NavLink>
                            </div>
                            <div>
                                <span>{film.title}</span>
                            </div>



                            <div
                                className={`${s.voteAverage} ${Number(film.vote_average.toFixed(1)) <= 3 ? s.voteAverageRed : Number(film.vote_average.toFixed(1)) <= 6.5 ? s.voteAverageYellow : s.voteAverageGreen}`}>
                                <span>{Number(film.vote_average.toFixed(1))}</span>
                            </div>

                            <button onClick={() => handleFavoriteClick(film)}>
                                {isFavorite(film.id) ?
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="red"
                                         viewBox="0 0 24 24">
                                        <path
                                            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                                  stroke="black" strokeWidth="2" viewBox="0 0 24 24">
                                        <path
                                            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                                    </svg>}
                            </button>


                        </div>
                    );
                })}
            </div>


        </div>
    );
};


