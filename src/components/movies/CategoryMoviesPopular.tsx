// import s from "./CategoryMovies.module.css"
import {Card} from "../MovieCard/Card.tsx";
import {useGetPopularMovieQuery} from "../../features/films/api/filmsApi.tsx";
import {ButtonsCategory} from "../../common/buttons/ButtonsСategory.tsx";
import { useState } from "react";

export const CategoryMoviesPopular = () =>{

    const [page, setPage] = useState(1);
    const { data: popularData, isLoading: popularLoading,isFetching } = useGetPopularMovieQuery({page});


    const handlePrev = () => {
        if (page > 1) {
            setPage(p => p - 1);
            // window.scrollTo({ top: 0 });
        }
    };

    const handleNext = () => {
        if (popularData && page < popularData.total_pages) {
            setPage(p => p + 1);
            // window.scrollTo({ top: 0 });
        }
    };


    if (popularLoading) return <div>Loading...</div>;


    return (
        <div>
            <ButtonsCategory/>
            {!popularLoading && popularData && <Card data={popularData} titleSection={"Popular Movies"} flagForMain={false} flagForButtonViewMore={false}/>}

            <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
                <button disabled={page === 1} onClick={handlePrev}>
                    Prev
                </button>

                <span>{page} / {popularData?.total_pages}</span>

                <button disabled={page === popularData?.total_pages} onClick={handleNext}>
                    Next
                </button>
            </div>

            {isFetching && <div>Loading page...</div>}

        </div>


    )
}