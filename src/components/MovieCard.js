import React from 'react'
import { TMDB_IMAGES_CDN } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { setTrailerPlayingState } from '../utils/Redux/MoviesSlice'


const MovieCard = ({movie}) => {

  const dispatch = useDispatch()


  const HandlePosterClick = () => {
    dispatch(setTrailerPlayingState(movie))
  }

  if(!movie.poster_path) return null
  return (
    <div className='w-28 mr-5 md:w-48' onClick={HandlePosterClick} >
        <img  alt='poster' src={TMDB_IMAGES_CDN + movie.poster_path} />
    </div>
  )
}

export default MovieCard