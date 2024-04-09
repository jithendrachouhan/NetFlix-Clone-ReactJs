import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./UserSlice"
import moviesReducer from "./MoviesSlice";
import searchReducer from "./SearchSlice"


const appStore = configureStore({
    reducer:{
        user: userReducer,
        movies: moviesReducer,
        search: searchReducer
    }
})

export default appStore