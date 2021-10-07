import React from "react";
import { Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setSelectedVideo } from "../redux/actions";

import VideoCard from "./VideoCard";

const VideoList = ({ videoList }) => {
  const dispatch = useDispatch();
  const handleVideoClick = (video) => {
    dispatch(setSelectedVideo(video));
  };

  return (
    <>
      <Col lg={3}>
        <div className="related-videos">
          {videoList.slice(1, 4).map((video, i) => (
            <VideoCard
              key={i}
              title={video.snippet.title}
              channel={video.snippet.channelTitle}
              image={`https://i.ytimg.com/vi/${video.id.videoId}/hqdefault.jpg`}
              select={() => handleVideoClick(video)}
            />
          ))}
        </div>
      </Col>
    </>
  );
};

export default VideoList;
