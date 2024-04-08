import React from 'react'

const VideoOverlapData = ({title, overview}) => {
  return (
    <div className='absolute grid gap-10 z-10 top-[30%] left-[5%] w-[40%]'>
        <h1 className='font-bold text-4xl'>{title}</h1>
        <p>{overview}</p>
        <div>
            <button className='p-3 rounded-md px-10 bg-gray-500'>Play</button>
            <button className='p-3 rounded-md px-6 ml-10 bg-gray-500'>More Info</button>
        </div>
    </div>
  )
}

export default VideoOverlapData