import s from "./ButtonsСategory.module.css"
import {NavLink} from "react-router-dom";

export const ButtonsCategory = () => {
    // const navigate = useNavigate()
    // const  onClickPopularMoviesHandler = () =>{
    //
    // }
    // const  onClickTopRatedMoviesHandler = () =>{
    //     navigate("movies/top-rated")
    // }
    // const  onClickUpcomingMoviesHandler = () =>{
    //
    // }
    // const  onClickNowPlayingMoviesHandler = () =>{
    //
    // }









    return(
        <div className={s.buttonContainer}>
            {/*<button className={s.customButton}>Popular Movies</button>*/}
            {/*<NavLink to={"/movies/popular"} className={s.customLink}>Popular Movies</NavLink>*/}
            <NavLink to={"/movies/popular"} className={
                ({isActive})=> isActive ? `${s.customLink} ${s.activeCustomLink} ` :s.customLink
            }>Popular Movies</NavLink>

            {/*<button  className={s.customButton} onClick={onClickTopRatedMoviesHandler}>Top Rated Movies</button>*/}
            <NavLink to={"/movies/top-rated"} className={
                ({isActive})=> isActive ? `${s.customLink} ${s.activeCustomLink} ` :s.customLink
            }>Top Rated Movies</NavLink>

            {/*<button  className={s.customButton}>Upcoming Movies</button>*/}
            <NavLink to={"/movies/upcoming"} className={
                ({isActive})=> isActive ? `${s.customLink} ${s.activeCustomLink} ` :s.customLink
            }>Upcoming Movies</NavLink>
            {/*<button className={s.customButton}>Now Playing Movies</button>*/}
            <NavLink to={"/movies/now-playing"} className={
                ({isActive})=> isActive ? `${s.customLink} ${s.activeCustomLink} ` :s.customLink
                }>Now Playing Movies</NavLink>
        </div>
    )
}



