import React from 'react'
import useNowPlayingMovies from '../utils/Hooks/useNowPlayingMovies';
import BannerScreen from './BannerScreen';
import VideoSuggestions from './VideoSuggestions';
import usePopularMovies from '../utils/Hooks/usePopularMovies';
import useTopRatedMovies from '../utils/Hooks/useTopRatedMovies';
import useUpComingMovies from '../utils/Hooks/useUpComingMovies';
import {  useSelector } from 'react-redux'
import SearchPage from './SearchPage';
import useTrailerDataGenerator from '../utils/Hooks/useTrailerDataGenerator';
import TrailerPlayer from './TrailerPlayer';

const MainPage = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  useTrailerDataGenerator()

  const isSearchActive = useSelector((store) => store.search.isSearchActive)
  const isTrailerPlaying = useSelector((store) => store.movies.isTrailerPlaying)

  return (  

    isSearchActive? <SearchPage/>:

    

    <div className=' bg-black'>
      {isTrailerPlaying && <TrailerPlayer/>}
      <div className='w-[100%]'>
        <BannerScreen />
      </div>
      <div className='ml-16 -mt-96  z-20'>
        <VideoSuggestions/>
      </div>


      <div className='fixed w-[100%] h-[100%] flex justify-center items-center bg-opacity-90 bg-black z-50'>
            <div className='relative w-[60%] h-96 bg-blue-700'>
            </div>
        </div>

      
      
    </div>
  )
    
}

export default MainPage