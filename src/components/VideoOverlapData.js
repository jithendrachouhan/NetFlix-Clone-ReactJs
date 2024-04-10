import React from 'react'

const VideoOverlapData = ({title, overview}) => {
  return (
    <div className='absolute grid gap-4 z-10 overflow-ellipsis top-[12%] left-[5%] w-[50%] md:top-[30%] md:w-[40%] md:gap-10'>
        <h1 className='font-bold text-sm md:text-4xl'>{title}</h1>
        <p className='text-sm md:text-lg'>{overview}</p>
        <div className='hidden md:flex'>
            <button className='p-3 rounded-md px-10 bg-gray-500'>Play</button>
            <button className='p-3 rounded-md px-6 ml-10 bg-gray-500'>More Info</button>
        </div>
    </div>
  )
}

export default VideoOverlapData