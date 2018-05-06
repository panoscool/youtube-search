import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    // equal to const videos = props.videos;
    const videoItems = props.videos.map((video) => {
        return(
            <VideoListItem 
            onVideoSelect={props.onVideoSelect}
            key={video.etag} 
            video={video} />
        );
    });

    return(
        <ul className="list">
            {videoItems}
        </ul>
    );
}

export default VideoList;