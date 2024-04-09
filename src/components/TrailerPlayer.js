import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { unSetTrailerPlayingState } from '../utils/Redux/MoviesSlice'

const TrailerPlayer = () => {

    const dispatch = useDispatch()
    const trailerData = useSelector((store) => store.movies.trailerInfo)

    console.log("Trailer data", trailerData)

    const HandleTrailerCancel = () => {
        dispatch(unSetTrailerPlayingState())
    }

    
    return (
        <div className='fixed w-[100%] h-[100%] flex justify-center items-center bg-opacity-90 bg-black z-50'>
            <div className='relative w-[60%]  '>
                    {!trailerData? <div className='w-[100] aspect-video bg-gray-200 border-gray-800 border-8 '></div>:
                    <iframe 
                        className=' w-[100%] aspect-video p-[-40]' 
                        src={"https://www.youtube.com/embed/" + trailerData.key + "?autoplay=1&mute=0&rel=0&showinfo=0&controls=0"}  
                        title="banner" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen>
                    </iframe>}
                <button className='absolute top-0 right-0 px-4 py-2 m-5 rounded-3xl bg-red-600' onClick={HandleTrailerCancel}>x</button>
            </div>
        </div>
    )
}

export default TrailerPlayer