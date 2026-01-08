import  s from "./Header.module.css"
import {Link} from 'react-router-dom'
import  {Logo} from "../Logo/Logo.tsx"

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import {IconButton} from "@mui/material";


import {useAppDispatch} from "../../common/hooks/useAppDispatch.ts";
import {useAppSelector} from "../../common/hooks/useAppSelector.ts";
import {selectTheme, toggleTheme} from "../../features/favorites/model/themeMode.ts";



export const Header = ()=> {


    const dispatch = useAppDispatch();
    const theme = useAppSelector(selectTheme);

    return (

        <div className={s.headerContainer}>
            <Link to={'/'}>
                <Logo />
            </Link>
            <div className={s.headerMenu}>
                <Link to={'/'}>
                    Main
                </Link>
                <Link to={'/movies/popular'}>
                    Category Movies
                </Link>
                <Link to={'/'}>
                    Filtered Movies
                </Link>
                <Link to={'/search'} >
                    Search
                </Link>
                <Link to={'/favorit'}>
                    Favorites
                </Link>

            </div>

            <IconButton
                onClick={() => {

                    return dispatch(toggleTheme())
                }}
                sx={{ color: 'white' }} // для хедера
            >
                {theme === "light" ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>


        </div>
    )


}

