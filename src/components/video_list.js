import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = ({ videos, app}) => (
  <ul className="col-md-4 list-group">
    {videos.map((video) =>
      <VideoListItem app={app} key={video.etag} video={video} />
    )}
  </ul>
)

export default VideoList;
