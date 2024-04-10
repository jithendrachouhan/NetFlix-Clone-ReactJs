import React, { useEffect, useRef } from 'react'
import { AUTH_BG_IMG } from '../utils/constants'
import useSearchMovieList from '../utils/Hooks/useSearchMovieList';
import { useDispatch, useSelector } from 'react-redux'
import { clearSearchData, updateSearchData } from '../utils/Redux/SearchSlice';
import MovieList from './MovieList';
import VideoSuggestions from './VideoSuggestions';
import TrailerPlayer from './TrailerPlayer';

const SearchPage = () => {

    const inputData = useRef();
    const dispatch = useDispatch()
    const moviList = useSelector((store) => store.search.searchMovieList)
    const isTrailerPlaying = useSelector((store) => store.movies.isTrailerPlaying)

    useSearchMovieList()
    

    useEffect(() => {
        inputData.current.focus();
    },[])

    const HandleSearchButtonClick = () => {
        dispatch((inputData.current.value === "")? clearSearchData(): updateSearchData(inputData.current.value))
    }

    return (
    <div>
        <div className='bg-black fixed h-[100%]'> 
            <div className='opacity-50 z-0 h-[100%]'>
                <img className='h-[100%] md:h-auto object-cover' src={AUTH_BG_IMG} alt="BG"></img>
            </div>
        </div>

        <div className='absolute top-[15%] w-[100%] md:top-[20%]'>
            <form className=' mx-auto bg-black w-[80%] grid grid-cols-12 md:w-[40%]' onSubmit={(e) => e.preventDefault()}>
                <input ref={inputData} className='bg-gray-900 py-2 px-5 m-2 col-span-9 ' type='text' placeholder="What's on your mind"/>
                <button className='bg-red-600 py-2 px-5 m-2 col-span-3' onClick={HandleSearchButtonClick}>Search</button>
            </form>
            {moviList &&
            <div className='mt-20 grid gap-10 ml-10 overflow-hidden'>
                {moviList.length? <MovieList title='Search Result' movies={moviList}/>: <h1 className='text-3xl'>No such movie found with us, Please check out our suggestions</h1>}
                <VideoSuggestions/>
            </div>}
        </div>

        {isTrailerPlaying && <TrailerPlayer/>}
        
    </div>
    )
}

export default SearchPage