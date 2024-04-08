import React from 'react'
import { TMDB_IMAGES_CDN } from '../utils/constants'

const MovieCard = ({poster_path}) => {
  return (
    <div className='w-48 mr-5'>
        <img  alt='poster' src={TMDB_IMAGES_CDN + poster_path} />
    </div>
  )
}

export default MovieCard