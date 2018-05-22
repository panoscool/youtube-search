import React from 'react';

const VideoDetail = ({ match }) => {
  if(!(match && match.params && match.params.id)) {
    return <div></div>;
  }

  const url = `https://www.youtube.com/embed/${match.params.id}`;

  return (
    <div className="video-detail">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" title="video" src={url} allowFullScreen></iframe>
      </div>
    </div>
  );
}

export default VideoDetail;
