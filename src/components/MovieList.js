import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {

  return (
    <div>
      <h1 className='text-xl mb-3 font-bold md:text-2xl'>{title}</h1>
      <div className='mt-5 flex gap-4 overflow-x-scroll no-scrollbar'>
          <div className='flex'>
              {movies.map((element) => {
                  return <MovieCard key={element.id} movie={element}/>
              })}
          </div>
      </div>
    </div>
  )
}

export default MovieList