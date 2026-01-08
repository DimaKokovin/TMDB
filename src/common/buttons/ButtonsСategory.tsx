import s from "./ButtonsСategory.module.css"
import {NavLink} from "react-router-dom";

export const ButtonsCategory = () => {



    return(
        <div className={s.buttonContainer}>

            <NavLink to={"/movies/popular"} className={
                ({isActive})=> isActive ? `${s.customLink} ${s.activeCustomLink} ` :s.customLink
            }>Popular Movies</NavLink>


            <NavLink to={"/movies/top-rated"} className={
                ({isActive})=> isActive ? `${s.customLink} ${s.activeCustomLink} ` :s.customLink
            }>Top Rated Movies</NavLink>


            <NavLink to={"/movies/upcoming"} className={
                ({isActive})=> isActive ? `${s.customLink} ${s.activeCustomLink} ` :s.customLink
            }>Upcoming Movies</NavLink>

            <NavLink to={"/movies/now-playing"} className={
                ({isActive})=> isActive ? `${s.customLink} ${s.activeCustomLink} ` :s.customLink
                }>Now Playing Movies</NavLink>
        </div>
    )
}



