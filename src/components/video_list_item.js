import React from 'react';

const VideoListItems = ({ app, video}) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return(
    <li onClick={() => app.videoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} alt="" />
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
}

export default VideoListItems;
