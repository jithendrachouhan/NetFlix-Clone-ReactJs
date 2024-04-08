import VideoBackGround from './VideoBackGround';
import VideoOverlapData from './VideoOverlapData'
import { useSelector } from "react-redux";


const BannerScreen = () => {

    const movieData = useSelector((store) => store.movies?.playingNow)
    if(movieData === null) return

    const { title, overview , id} = movieData[1]
    

    return (
        <div>
            <VideoBackGround id={id}/>
            <VideoOverlapData title={title} overview={overview}/>
        </div>
    )
}

export default BannerScreen