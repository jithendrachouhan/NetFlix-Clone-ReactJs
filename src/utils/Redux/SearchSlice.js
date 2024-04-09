import { createSlice } from "@reduxjs/toolkit";


const SearchSlice = createSlice({
    name: "search",
    initialState: {
        isSearchActive: false,
        searchData: null,
        searchMovieList: null
    },
    reducers: {
        changeSearchState: (state) => {
            state.isSearchActive = !state.isSearchActive
            state.searchData = null
            state.searchMovieList = null
        },
        updateSearchData: (state,action) => {
            state.searchData = action.payload
        },
        clearSearchData:(state) => {
            state.searchData = null
        },
        addSearchMovieList:(state,action) => {
            state.searchMovieList = action.payload
        }
    }
})

export const {changeSearchState, updateSearchData, clearSearchData, addSearchMovieList} = SearchSlice.actions

export default SearchSlice.reducer


