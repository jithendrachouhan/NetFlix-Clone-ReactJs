import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
    name:'Movies',
    initialState: {
        playingNow: null,
        popular: null,
        topRated: null,
        upcoming: null,
        bannerMovie: null,
        isTrailerPlaying: false,
        trailerMovieSelected: null,
        trailerInfo: null
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
        },
        setTrailerPlayingState: (state,action) => {
            state.isTrailerPlaying = true
            state.trailerMovieSelected = action.payload
        },
        updateTrailerMovieSelected: (state,action) => {
            state.trailerMovieSelected = action.payload
        },
        updateTrailerInfo:(state,action) => {
            state.trailerInfo = action.payload
        },
        unSetTrailerPlayingState: (state) => {
            state.isTrailerPlaying = false
            state.trailerMovieSelected = null
            state.trailerInfo = null
        },

    }
})

export const {addPlayingNow, addpopularMovies, addTopRated, addUpComing, addBannerMovie, setTrailerPlayingState, updateTrailerInfo, unSetTrailerPlayingState} = MovieSlice.actions; 
export default MovieSlice.reducer

