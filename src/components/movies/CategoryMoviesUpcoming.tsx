import { useGetUpcomingMovieQuery} from "../../features/films/api/filmsApi.tsx";
import {ButtonsCategory} from "../../common/buttons/ButtonsСategory.tsx";
import {Card} from "../MovieCard/Card.tsx";
import {useState} from "react";

export const CategoryMoviesUpcoming = () => {
    const [page, setPage] = useState(1);
    const { data: upcomingMovieData, isLoading: upcomingMovieLoading, isFetching } = useGetUpcomingMovieQuery({page})
    const handlePrev = () => {
        if (page > 1) {
            setPage(p => p - 1);
            // window.scrollTo({ top: 0 });
        }
    };

    const handleNext = () => {
        if (upcomingMovieData && page < upcomingMovieData.total_pages) {
            setPage(p => p + 1);
            // window.scrollTo({ top: 0 });
        }
    };


    if (upcomingMovieLoading) return <div>Loading...</div>;




    return (
        <div>
            <ButtonsCategory/>
            {!upcomingMovieLoading && upcomingMovieData && <Card data={upcomingMovieData} titleSection={"Upcoming"} flagForMain={false} flagForButtonViewMore={false}/>}

            <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
                <button disabled={page === 1} onClick={handlePrev}>
                    Prev
                </button>

                <span>{page} / {upcomingMovieData?.total_pages}</span>

                <button disabled={page === upcomingMovieData?.total_pages} onClick={handleNext}>
                    Next
                </button>
            </div>

            {isFetching && <div>Loading page...</div>}

        </div>
    )
}