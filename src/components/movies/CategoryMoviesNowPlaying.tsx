import {useGetNowPlayingMovieQuery} from "../../features/films/api/filmsApi.tsx";
import {ButtonsCategory} from "../../common/buttons/ButtonsСategory.tsx";
import {Card} from "../MovieCard/Card.tsx";
import {useState} from "react";

export const CategoryMoviesNowPlaying = () => {
    const [page, setPage] = useState(1);
    const {data: nowPlayingMovieData, isLoading: NowPlayingMovieLoading,isFetching} = useGetNowPlayingMovieQuery({page});




    const handlePrev = () => {
        if (page > 1) {
            setPage(p => p - 1);
            // window.scrollTo({ top: 0 });
        }
    };

    const handleNext = () => {
        if (nowPlayingMovieData && page < nowPlayingMovieData.total_pages) {
            setPage(p => p + 1);
            // window.scrollTo({ top: 0 });
        }
    };


    if (NowPlayingMovieLoading) return <div>Loading...</div>;




    return (
        <div>
            <ButtonsCategory/>
            {!NowPlayingMovieLoading && nowPlayingMovieData && <Card
                data={nowPlayingMovieData} titleSection={"Now Playing"} flagForMain={false}
                flagForButtonViewMore={false} />}



            <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
                <button disabled={page === 1} onClick={handlePrev}>
                    Prev
                </button>

                <span>{page} / {nowPlayingMovieData?.total_pages}</span>

                <button disabled={page === nowPlayingMovieData?.total_pages} onClick={handleNext}>
                    Next
                </button>
            </div>

            {isFetching && <div>Loading page...</div>}

        </div>
    )
}