import { useEffect } from "react"
import { TMBD_API_DATA,  TMBD_TOP_RATED_URL } from "../constants";
import {  useDispatch } from "react-redux";
import { addTopRated } from "../Redux/MoviesSlice";


const useTopRatedMovies = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch(TMBD_TOP_RATED_URL,TMBD_API_DATA)
        const json = await data.json();
        // put this data to redux store 
        dispatch(addTopRated(json.results))

    }

}


export default useTopRatedMovies