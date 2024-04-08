import { useEffect } from "react"
import { TMBD_API_DATA, TMBD_NOW_PLAYING_URL } from "../constants";
import {  useDispatch } from "react-redux";
import { addPlayingNow } from "../Redux/MoviesSlice";


const useNowPlayingMovies = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch(TMBD_NOW_PLAYING_URL,TMBD_API_DATA)
        const json = await data.json();
        // put this data to redux store 
        dispatch(addPlayingNow(json.results))

    }

}


export default useNowPlayingMovies