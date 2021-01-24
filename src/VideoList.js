import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos , handleVideoSelect}) => {
    const renderedVideos =  videos.map((video) => {
        return <VideoItem  style={{textAlign:"center"}} key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
        // console.log(video.id);
    });

    return <div style={{textAlign:"center",  width:'1200px'}} className='ui relaxed divided list'>{renderedVideos}</div>;
};
export default VideoList;