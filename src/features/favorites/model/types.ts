

export type FavoriteFilm = {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
};



//const [favoritesIds, setFavoritesIds] = useState<number[]>(() => {
    // Берём данные из localStorage при инициализации
//    const stored = localStorage.getItem("favorit");
//    return stored ? JSON.parse(stored).map((f: FavoriteFilm) => f.id) : [];
//});
//const isFavorite = (id: number) => favoritesIds.includes(id);
//const handleFavoriteClick = (filmFromAPI: PopularFilm) => {
    // Получаем текущий массив избранного из localStorage
//   const favorites: FavoriteFilm[] = JSON.parse(localStorage.getItem("favorit") || "[]");


//    const exists = favorites.some(fav => fav.id === filmFromAPI.id);

//   let newFavorites: FavoriteFilm[];
//    if (exists) {

//        newFavorites = favorites.filter(fav => fav.id !== filmFromAPI.id);
//   } else {

 //       const newFilm: FavoriteFilm = {
   //         id: filmFromAPI.id,
     //       title: filmFromAPI.title,
       //     posterUrl: filmFromAPI.poster_path
         //       ? `https://image.tmdb.org/t/p/w200/${filmFromAPI.poster_path}`
           //     : "https://placehold.co/200x300?text=Non\nPoster",
           // voteAverage: filmFromAPI.vote_average
      //  };

        //newFavorites = [...favorites, newFilm];
    //}

    // Сохраняем в localStorage
//    localStorage.setItem("favorit", JSON.stringify(newFavorites));

    // Обновляем UI
  //  setFavoritesIds(newFavorites.map(fav => fav.id));
//};
