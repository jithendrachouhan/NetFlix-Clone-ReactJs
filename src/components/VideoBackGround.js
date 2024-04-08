import React from 'react'
import useBannerVideoData from '../utils/Hooks/useBannerVideoData';
import { useSelector } from "react-redux";

const VideoBackGround = ({id}) => {

    useBannerVideoData(id);

    const bannerImageData = useSelector((store) => store.movies?.bannerMovie)
    if(!bannerImageData) return 


    return (  
        <div className='bg-black '>
            <div className='opacity-20'>
                <iframe 
                    className=' w-[100%] aspect-video p-[-40]' 
                    src={"https://www.youtube.com/embed/" + "hXzcyx9V0xw" + "?autoplay=1&mute=1&rel=0&showinfo=0&controls=0"}  
                    title="banner" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen>
                </iframe>
            </div>
        </div>
    )
}

export default VideoBackGround