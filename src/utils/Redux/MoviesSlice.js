import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
    name:'Movies',
    initialState: {
        playingNow: null,
        popular: null,
        topRated: null,
        upcoming: null,
        bannerMovie: null
    },
    reducers: {
        addPlayingNow: (state,action) => {
            state.playingNow = action.payload
        },
        addpopularMovies: (state,action) => {
            state.popular = action.payload
        },
        addTopRated: (state,action) => {
            state.topRated = action.payload
        },
        addUpComing: (state,action) => {
            state.upcoming = action.payload
        },
        addBannerMovie: (state,action) => {
            state.bannerMovie = action.payload
        }

    }
})

export const {addPlayingNow, addpopularMovies, addTopRated, addUpComing, addBannerMovie} = MovieSlice.actions; 
export default MovieSlice.reducer

