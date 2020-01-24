import React from 'react';
import './VideoItem.css';

const VideoItem=({video,onVideoItemSelected})=>{

    
    return(
        <div onClick={(e)=>onVideoItemSelected(video)} className="video-item item">
        <img alt={video.snippet.description} className="ui image" src={video.snippet.thumbnails.medium.url} />
        <div className="content">
         <div className="header">{video.snippet.title}</div>
         {/* <div class="description">{video.snippet.description}</div> */}
         </div>
         </div>
    )
}

export default VideoItem