import React from "react";
import { Col } from "react-bootstrap";
import VideoCard from "./VideoCard";

const VideoList = ({ videoList }) => {
  return (
    <>
      <Col lg={3}>
        <div className="related-videos">
          {videoList.splice(1, 3).map((video, i) => (
            <VideoCard
              key={i}
              title={video.snippet.title}
              channel={video.snippet.channelTitle}
              image={`https://i.ytimg.com/vi/${video.id.videoId}/hqdefault.jpg`}
            />
          ))}
        </div>
      </Col>
    </>
  );
};

export default VideoList;
