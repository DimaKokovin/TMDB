import s from './Page404.module.css'
import {useNavigate} from "react-router-dom";

export const Page404 = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className={s.mainContainer}>
                <span>Page Not Found</span>
                <button onClick={()=>{navigate('/')}}>To main</button>
            </div>
        </div>
    )
}