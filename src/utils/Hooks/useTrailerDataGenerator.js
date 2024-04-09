import { useEffect } from "react";
import { TMBD_API_DATA } from "../constants";
import {  useDispatch, useSelector } from "react-redux";
import { updateTrailerInfo } from "../Redux/MoviesSlice";

const useTrailerDataGenerator = (id) => {
    const dispatch = useDispatch()
    const movieData = useSelector((store) => store.movies.trailerMovieSelected)

    useEffect(()=>{
        if(movieData) fetchData();
    },[movieData])

    const fetchData = async () => {
        const data = await fetch(
            'https://api.themoviedb.org/3/movie/'+ movieData.id + '/videos?language=en-US', TMBD_API_DATA
        )
        const json = await data.json()
        
        const movieVideoData = json?.results.filter((data)=> {return data.name === 'Official Trailer'})
        const trailerData = movieVideoData.length >= 1? movieVideoData[0]: json?.results[0]
        console.log("received data from API", movieVideoData)
        dispatch(updateTrailerInfo(trailerData))
    }
}

export default useTrailerDataGenerator