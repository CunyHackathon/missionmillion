import React from 'react';
import './style/video.css';

const VideoItem = ({video , handleVideoSelect}) => {
    return (
        <div style={{textAlign:"center"}} onClick={ () => handleVideoSelect(video)} className=' video-item item'>
            <img style={{textAlign:"center"}} className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            <h1> 	&nbsp; </h1>
            <div className='content'>
                
                <div className='header '>{video.snippet.title}</div>
            </div>
        </div>
    )
};
export default VideoItem;

