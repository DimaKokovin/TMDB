import {Card} from "../MovieCard/Card.tsx";
import { useGetTopRaredMovieQuery} from "../../features/films/api/filmsApi.tsx";
import {ButtonsCategory} from "../../common/buttons/ButtonsСategory.tsx";
import {useState} from "react";

export const CategoryMoviesTopRated = () =>{

    const [page, setPage] = useState(1);
    const { data: topRatedData, isLoading: topRatedLoading, isFetching } = useGetTopRaredMovieQuery({page});

    const handlePrev = () => {
        if (page > 1) {
            setPage(p => p - 1);
            // window.scrollTo({ top: 0 });
        }
    };

    const handleNext = () => {
        if (topRatedData && page < topRatedData.total_pages) {
            setPage(p => p + 1);
            // window.scrollTo({ top: 0 });
        }
    };


    if (topRatedLoading) return <div>Loading...</div>;




    return (
        <div>
            <ButtonsCategory/>
            {!topRatedLoading && topRatedData && <Card data={topRatedData} titleSection={"Top Rated"} flagForMain={false} flagForButtonViewMore={false}/>}

            <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
                <button disabled={page === 1} onClick={handlePrev}>
                    Prev
                </button>

                <span>{page} / {topRatedData?.total_pages}</span>

                <button disabled={page === topRatedData?.total_pages} onClick={handleNext}>
                    Next
                </button>
            </div>

            {isFetching && <div>Loading page...</div>}

        </div>
    )
}