import video from '../img/videoplayback.mp4';

export function VideoPlayBack() {
    return(
        <video autoPlay loop>
            <source src={video} type="video/mp4" />
        </video>
    )
}