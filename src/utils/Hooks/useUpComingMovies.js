import { useEffect } from "react"
import { TMBD_API_DATA, TMBD_UP_COMING_URL } from "../constants";
import {  useDispatch } from "react-redux";
import { addUpComing } from "../Redux/MoviesSlice";


const useUpComingMovies = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch(TMBD_UP_COMING_URL,TMBD_API_DATA)
        const json = await data.json();
        // put this data to redux store 
        dispatch(addUpComing(json.results))

    }

}


export default useUpComingMovies