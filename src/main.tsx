// import {createRoot} from 'react-dom/client'
// // import './index.css'
// import {App} from "./App"
// import {Provider} from "react-redux";
// import {store} from "./app/store.ts";
//
//
//
// createRoot(document.getElementById('root')!).render(
//
//
//
//       <Provider store={store}>
//           <App />
//       </Provider>
//
//
// )
//
//

import { createRoot } from "react-dom/client";
import { App } from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";
import { loadTheme } from "./features/favorites/model/favoritesStorage.ts"; // Загружаем тему из localStorage

// Получаем текущую сохраненную тему из localStorage
const savedTheme = loadTheme(); // "light" или "dark"

// Применяем тему к body
document.body.setAttribute("data-theme", savedTheme || "light"); // Если нет сохраненной темы, ставим light как дефолт

createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <App />
    </Provider>
);

