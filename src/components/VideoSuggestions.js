import React from 'react'
import { useSelector } from "react-redux";
import MovieList from './MovieList';

const VideoSuggestions = () => {
    
    const MoviesData = useSelector((store) => store.movies)
    const {upcoming, topRated, popular, playingNow} = MoviesData


    return (
        <div>
            {playingNow && <MovieList title='Playing Now' movies={playingNow}/>}
            {topRated && <MovieList title='Top Rated' movies={topRated}/>}
            {upcoming && <MovieList title='Up Coming' movies={upcoming}/>}
            {popular && <MovieList title='Popular Movies' movies={popular}/>}
        </div>
    )
}

export default VideoSuggestions