import React from "react";

const VideoCard = ({ image, title, channel, select }) => {
  return (
    <div className="video-card mb-5 mb-md-0" onClick={select}>
      <div className="video-card-img">
        <img src={image} alt="" srcSet="" />
      </div>
      <div className="video-card-info">
        <div className="video-card-text">
          <h4 className="mt-2">{title}</h4>
          <p>Channel: {channel}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
