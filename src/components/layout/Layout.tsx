import {Outlet} from "react-router-dom";
import {Header} from "../Header/Header";
import {Footer} from "../footer/Footer.tsx";
import s from "./Layout.module.css"
export const Layout = () => {
    return (
        <div className={s.layoutContainer}>
            <Header />
            <div className={s.mainContent}>
                <Outlet />
            </div>

            <Footer />
        </div>
    );
};
