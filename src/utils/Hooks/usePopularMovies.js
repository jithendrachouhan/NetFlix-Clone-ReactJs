import { useEffect } from "react"
import { TMBD_API_DATA,  TMBD_POPULAR_URL } from "../constants";
import {  useDispatch } from "react-redux";
import {  addpopularMovies } from "../Redux/MoviesSlice";


const usePopularMovies = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch(TMBD_POPULAR_URL,TMBD_API_DATA)
        const json = await data.json();
        // put this data to redux store 
        dispatch(addpopularMovies(json.results))

    }

}


export default usePopularMovies