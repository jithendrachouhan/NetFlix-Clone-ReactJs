import React from 'react'
import useNowPlayingMovies from '../utils/Hooks/useNowPlayingMovies';
import BannerScreen from './BannerScreen';
import VideoSuggestions from './VideoSuggestions';
import usePopularMovies from '../utils/Hooks/usePopularMovies';
import useTopRatedMovies from '../utils/Hooks/useTopRatedMovies';
import useUpComingMovies from '../utils/Hooks/useUpComingMovies';

const MainPage = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();

  return (
    <div className='bg-black'>
      <div className='w-[100%]'>
        <BannerScreen />
      </div>
      <VideoSuggestions/>
    </div>
  )
    
}

export default MainPage