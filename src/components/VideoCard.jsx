import React from "react";

const VideoCard = ({ image, title, channel }) => {
  return (
    <div>
      <img src={image} alt="" srcSet="" />
      <div className="video-card-info">
        <div className="video-card-text">
          <h4>{title}</h4>
          <p>Channel: {channel}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
