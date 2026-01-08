

import s from './Main.module.css';
import { useNavigate} from "react-router-dom";
import * as React from "react";
import { useState, useRef } from "react";
import { ImgGet } from "./ImgGet.tsx";
import {
    useGetNowPlayingMovieQuery,
    // useGetPopularFilmQuery,
    useGetPopularMovieQuery,
    useGetTopRaredMovieQuery, useGetUpcomingMovieQuery
} from "../../features/films/api/filmsApi.tsx";
import {Card} from "../MovieCard/Card.tsx";

export const Main = () => {
    const { data: popularData, isLoading: popularLoading } = useGetPopularMovieQuery({});
    const { data: topRatedData, isLoading: topRatedLoading } = useGetTopRaredMovieQuery({});
    const { data: upcomingMovieData, isLoading: upcomingMovieLoading } = useGetUpcomingMovieQuery({});
    const { data: nowPlayingMovieData, isLoading: NowPlayingMovieLoading } = useGetNowPlayingMovieQuery({});


    const [searchText, setSearchText] = useState(""); // Для ввода текста
    const navigate = useNavigate();

    // Реф для хранения случайного фильма, чтобы он не изменялся на каждом рендере
    const randomFilmRef = useRef<any>(null);

    // const { data } = useGetPopularFilmQuery();

    // Генерация случайного фильма только при первом рендере
    if (popularData && !randomFilmRef.current) {
        const arrFilm: number[] = [];
        popularData.results.forEach((film: any) => {
            arrFilm.push(film.id);
        });

        const randomIndex = Math.floor(Math.random() * arrFilm.length);
        const randomNumberFilm = arrFilm[randomIndex];
        randomFilmRef.current = popularData.results.find((f: any) => f.id === randomNumberFilm);
    }

    const onClickHandler = (e: React.FormEvent) => {
        e.preventDefault(); // Останавливаем перезагрузку страницы
        navigate(`/search?query=${encodeURIComponent(searchText)}`);
    };

    const ChangeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.currentTarget.value);
    };

    const isDisabled = !searchText.trim();

    return (
        <div className={s.mainContainer}>
            <div className={s.mainTitle}>
                <span>Welcome</span>
                <span>Enter the movie title</span>
            </div>
            {/* Передаем случайный фильм только при первом рендере */}
            <ImgGet film={randomFilmRef.current} />
            <div className={s.inputSection}>
                <form className={s.formSection}>
                    <input
                        type="search"
                        className={s.customInput}
                        placeholder="Enter movie title"
                        onChange={ChangeEventHandler}
                        value={searchText}
                    />
                    <button
                        type="submit"
                        className={s.customButton}
                        onClick={onClickHandler}
                        disabled={isDisabled}
                    >
                        Search
                    </button>
                </form>
            </div>

            <div className={s.mainCardDiv}>
                {!popularLoading && popularData && <Card data={popularData} titleSection={"Popular Movies"} flagForMain={true} flagForButtonViewMore={true} PuthForLinks={"/movies/popular"}/>}
                {!topRatedLoading && topRatedData && <Card data={topRatedData}  titleSection={"Top Rated Movies"} flagForMain={true} flagForButtonViewMore={true} PuthForLinks={"/movies/top-rated"}/>}
                {!upcomingMovieLoading && upcomingMovieData && <Card data={upcomingMovieData}  titleSection={"Upcoming Movies"} flagForMain={true} flagForButtonViewMore={true} PuthForLinks={'/movies/upcoming'}/>}
                {!NowPlayingMovieLoading && nowPlayingMovieData && <Card data={nowPlayingMovieData}  titleSection={"Now Playing Movies"} flagForMain={true} flagForButtonViewMore={true} PuthForLinks={'/movies/now-playing'}/>}
            </div>


        </div>
    );
};










