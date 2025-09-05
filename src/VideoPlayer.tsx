import React, { useRef, useEffect } from 'react';

interface VideoPlayerProps {
    src: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.muted = true; // Set muted for autoplay in modern browsers
            video.autoplay = true;
            video.loop = true; // Add loop attribute to make the video loop
            video.play();
        }
    }, [src]);

    return (
        <video 
            ref={videoRef} 
            src={src} 
            controls={false} 
            style={{
                width: '100%',
                maxWidth: '640px',
                height: 'auto',
                display: 'block',
                margin: '0 auto'
            }}
        >
            Your browser does not support the video tag.
        </video>
    );
};

export default VideoPlayer;
