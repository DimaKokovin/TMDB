// import s from "./Main.module.css";
// import {useGetPopularFilmQuery} from "../../features/films/api/filmsApi.tsx";
//
// export const ImgGet = () => {
//     const {data} = useGetPopularFilmQuery()
//     const arrFilm: number[] = []
//     data?.results.map((film) => {
//         arrFilm.push(film.id)
//     })
//
//     //сначал мы мапимся по первой странице получаем айдишки и сохраняем их в arrFilm
//     // затем достаем рандомно айдишку из массива и сравниваем ее с  айдишками на первой страние
//     // совпадает - выводим постер
//     const randomIndex = Math.floor(Math.random() * arrFilm.length);
//     const randomNumberFilm = arrFilm[randomIndex];
//     const film = data?.results.find((f) => f.id === randomNumberFilm)
//
//     return (
//         <div className={s.mainImgFilm}>
//             <img src={`https://image.tmdb.org/t/p/original${film?.backdrop_path}`}/>
//         </div>
//     )
// }
import s from "./Main.module.css";

// Тип для пропса, который передаем в компонент
type ImgGetProps = {
    film: any; // Пропс film, который будет передан из родительского компонента
};

export const ImgGet: React.FC<ImgGetProps> = ({ film }) => {
    if (!film) {
        return <p>Loading...</p>; // Пока не получен фильм, показываем сообщение
    }

    return (
        <div className={s.mainImgFilm}>
            <img
                src={`https://image.tmdb.org/t/p/original${film?.backdrop_path}`}
                alt={film?.title || "Random Film"} // Используем title, если оно есть
            />
        </div>
    );
};
