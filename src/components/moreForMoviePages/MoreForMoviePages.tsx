import {
    useGetMoreForMovieQuery,
    useGetMovieActorsQuery,
    useGetMovieSimilarQuery
} from "../../features/films/api/filmsApi.tsx";
import {useNavigate, useParams} from "react-router-dom";
import s from "./MoreForMoviePages.module.css"
import {Card} from "../MovieCard/Card.tsx";

export const MoreForMoviePages = () => {
    const navigate = useNavigate();

    const { movieId } = useParams<{ movieId: string }>();

    const { data:movie } = useGetMoreForMovieQuery({
        movie_id: Number(movieId),
    });


    const {data:actors} = useGetMovieActorsQuery(
        {
            movie_id: Number(movieId),
        }
    )

    const {data:similar,isLoading:isLoadingSimilar} = useGetMovieSimilarQuery(
        {
            movie_id: Number(movieId),
        }
    )

    // так у нас есть продолжительность фильма строка мы перегоняем ее в число
    // потом делим это число на 60 получаем скорее всего дробное знпчение  округляем тогда в мньшую сторону
    // затем мы например 175/60 получили 2,9 мы 2 * 60 и потом 175 - 120 = 55 и 55 минут мы окргуляем (это значение)
    // а потом пишем что 2 часа 55 миут длился фильм  если фильм больше 60 минут
    // а если нет то сразу пишем что длился например 30 минут

    const limitedData = actors?.cast.slice(0, 6)

    // const numberRunTime =  Number(movie?.runtime)
    const numberRunTime = movie?.runtime ?? 0;


    function formatDuration(minutes: number): string {
        if (minutes < 60) {
            // Меньше часа — сразу минуты
            return `${minutes} минут`;
        } else {
            const hours = Math.floor(minutes / 60); // целые часы
            const mins = minutes % 60;              // остаток минут
            return `${hours} час${hours > 1 ? "а" : ""} ${mins} минут`;
        }
    }





    return (
        <div className={s.MoreForMoviePages}>


            <div key={movie?.id} className={s.boxPages}>
                <div>
                    <div className={s.cardContainer}>
                        {movie?.poster_path ? <img
                            src={`https://image.tmdb.org/t/p/w300/${movie?.poster_path}`}
                            alt="poster"
                        /> : <img src="https://placehold.co/200x300?text=Non\nPoster" alt="Non poster"/>}
                    </div>
                </div>
               <div className={s.detailsBox}>
                   <div className={s.titleBox}>
                       {movie?.title }
                   </div>
                   <div className={s.dateBox}>
                       <div>
                           {`Release year: ${movie?.release_date.slice(0,4) }` }
                       </div>
                       <div
                           className={`${s.voteAverage} ${Number(movie?.vote_average.toFixed(1)) <= 3 ? s.voteAverageRed : Number(movie?.vote_average.toFixed(1)) <= 6.5 ? s.voteAverageYellow : s.voteAverageGreen}`}>
                           <span>{Number(movie?.vote_average.toFixed(1))}</span>
                       </div>
                       <div>
                           {/*{ `Runtime: ${data?.runtime }`}*/}
                           { `Runtime: ${formatDuration(numberRunTime)}`}
                       </div>
                   </div>
                   <div>
                       {movie?.overview }
                   </div>
                   <div className={s.genresBox}>
                       {movie?.genres.map((film_genre)=>{
                           return <span>{film_genre.name}</span>
                       })}
                   </div>
                   <div className={s.buttonsBack}>
                       <button onClick={() => navigate(-1)}>
                           ← Back
                       </button>

                   </div>

               </div>
            </div>
            <section >
                    <span className={s.titleSectionActor}>Actors</span>
                    <div className={s.actorsCardContainer}>
                        {limitedData?.map((actor)=>{
                          return (
                             <div key={actor.id}  className={s.actors}>
                                 <div className={s.actorsCard}>{actor?.profile_path ? <img
                                     src={`https://image.tmdb.org/t/p/w154/${actor?.profile_path}`}
                                     alt="poster"
                                 /> : <img src="https://placehold.co/200x200?text=Non\nPoster" alt="Non poster"/>}
                                 </div>
                                 <div>
                                     <span>
                                         {actor.original_name}
                                     </span>
                                 </div>
                                 <div>
                                     <span>
                                         {actor.character}
                                     </span>
                                 </div>

                             </div>)
                        })}
                    </div>
            </section>
            <section>
                {!isLoadingSimilar && similar && <Card data={similar} titleSection={'Similar movies'} flagForMain={true} flagForButtonViewMore={false}/>}
                {/*flagForMain={true} это ошибка в данном случае, но параметр нужен  чтобы отрисовать не более 6 картинок*/}
            </section>

        </div>

    )
}



// Постер фильма (большего размера по отношению к карточке фильма)
// Название фильма

// Год выпуска
// Рейтинг
// Продолжительность



// Жанры


// Описание фильма