import { useEffect } from "react";
import { TMBD_API_DATA } from "../constants";
import {  useDispatch } from "react-redux";
import { addBannerMovie } from "../Redux/MoviesSlice";

const useBannerVideoData = (id) => {

    const dispatch = useDispatch()

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch(
            'https://api.themoviedb.org/3/movie/'+ id + '/videos?language=en-US', TMBD_API_DATA
        )
        const json = await data.json()
        
        const movieVideoData = json?.results.filter((data)=> {return data.name === 'Official Trailer'})
        const bannerData = movieVideoData.length >= 1? movieVideoData[0]: json?.results[0]
        console.log("dwadaw", bannerData)
        dispatch(addBannerMovie(bannerData))
    }

}

export default useBannerVideoData   