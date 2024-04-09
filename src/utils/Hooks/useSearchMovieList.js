import { useEffect } from "react"
import { TMBD_API_DATA, TMDB_MOVIE_SEARCH } from "../constants"
import { useDispatch, useSelector } from 'react-redux'
import { addSearchMovieList } from "../Redux/SearchSlice"

const useSearchMovieList = () => {

    const searchData = useSelector((store) => store.search.searchData)
    const dispatch = useDispatch();

    const fetchData = async () => {
        const data = await fetch(
            TMDB_MOVIE_SEARCH + "query="+ searchData + "&page=1",
            TMBD_API_DATA
        )
        const json = await data.json();
        
        dispatch(addSearchMovieList(json?.results))
        
    }

    useEffect(()=>{
        searchData && fetchData();
    },[searchData])
}

export default useSearchMovieList