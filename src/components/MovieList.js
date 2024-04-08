import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {

  console.log("awddddddddddddddddddddddddd",movies)
  return (
    <div>
      <h1 className='text-2xl mb-3 font-bold'>{title}</h1>
      <div className='mt-5 flex gap-4 overflow-x-scroll'>
          <div className='flex'>
              {movies.map((element) => {
                  return <MovieCard poster_path={element.poster_path}/>
              })}
          </div>
      </div>
    </div>
  )
}

export default MovieList