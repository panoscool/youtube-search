import React from 'react';
import '../style/video_list_item.css';

const VideoListItems = ({video, onVideoSelect}) => {
    // equal to const video = props.video;
    const imageUrl = video.snippet.thumbnails.default.url;

    return(
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>

                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
}

export default VideoListItems;