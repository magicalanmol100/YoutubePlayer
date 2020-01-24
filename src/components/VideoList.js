import React from 'react';
import VideoItem from './VideoItem';

const VideoList=({videos,onVideoItemSelected})=>{


    const renderedList=videos.map((video)=>{
        return <VideoItem key={video.id.videoId} video={video} onVideoItemSelected={onVideoItemSelected} />
    })
    return (
        <div className="ui relaxed divided list">{renderedList}</div>
    )
}

export default VideoList