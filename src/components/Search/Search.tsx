import {useLocation, useNavigate} from "react-router-dom";
import { useGetSearchMovieQuery } from "../../features/films/api/filmsApi.tsx";
import {useEffect, useState} from "react";
import s from './Search.module.css'
import { Card } from "../MovieCard/Card.tsx";
import * as React from "react";

export const Search = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchTerm = queryParams.get("query") || "";

    // Делаем запрос к API по введённому запросу
    const [searchText, setSearchText] = useState(""); // Для ввода текста
    const navigate = useNavigate();


    const [page, setPage] = useState(1);
    const { data, isLoading, error, refetch,isFetching } = useGetSearchMovieQuery({searchTerm,page});

    // Используем useEffect, чтобы инициировать новый запрос при изменении searchTerm
    useEffect(() => {
        if (searchTerm) {
            refetch(); // Ручной рефетч для повторного запроса
        }
    }, [searchTerm, refetch]);
    if (isLoading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка запроса</div>;

    const isDisabled = !searchText.trim();




    const onClickHandler = (e: React.FormEvent) => {
        e.preventDefault(); // Останавливаем перезагрузку страницы
        navigate(`/search?query=${encodeURIComponent(searchText)}`);
    };

    const ChangeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.currentTarget.value);
    };




    if (!searchTerm) return (

        <div className={s.inputSection}>

            <div className={s.searchAndInputContainer}>
                <span className={s.titleSearch}>Search Results</span>

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


            {/*{ data?.results && data.results.length === 0 ? <span className={s.title}>Enter a movie title to start searching</span> : <span>{`No matches found for ${searchText}`}</span> }*/}
            <span className={s.title}>Enter a movie title to start searching</span>
        </div>
    )

    // if (data?.results?.length === 0) return <div>Ничего не найдено</div>;


    const handlePrev = () => {
        if (page > 1) {
            setPage(p => p - 1);
            // window.scrollTo({ top: 0 });
        }
    };

    const handleNext = () => {
        if (data && page < data.total_pages) {
            setPage(p => p + 1);
            // window.scrollTo({ top: 0 });
        }
    };





    return (
        <div className={s.searchContainer}>


                {isLoading || isFetching ? (<div>Loading...</div>) : data?.results && data?.results.length >= 1 ?

                    (
                        <>
                            <div className={s.inputSection}>

                                <div className={s.searchAndInputContainer}>


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
                            </div>


                            <Card data={data} flagForMain={false} flagForButtonViewMore={false} titleSection={"Results of searched"} />

                            <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
                                <button disabled={page === 1} onClick={handlePrev}>
                                    Prev
                                </button>

                                <span>{page} / {data?.total_pages}</span>

                                <button disabled={page === data?.total_pages} onClick={handleNext}>
                                    Next
                                </button>
                            </div>
                            {isFetching && <div>Loading page...</div>}
                        </>
                        ) : (

                            <>
                                <div className={s.inputSection}>

                                    <div className={s.searchAndInputContainer}>
                                        <span className={s.titleSearch}>Search Results</span>

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


                                    {/*{ data?.results && data.results.length === 0 ? <span className={s.title}>Enter a movie title to start searching</span> : <span>{`No matches found for ${searchText}`}</span> }*/}
                                    <span className={s.title}>{`No matches found for "${searchTerm}"`}</span>
                                </div>
                            </>

                            )


                }



            {/*}*/}

        </div>
    );
};
