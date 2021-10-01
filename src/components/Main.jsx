import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getVideoSearch } from "../redux/actions";
import Player from "./player/Player";
import VideoCard from "./VideoCard";

const Main = () => {
  const [searchVideo, setSearchVideo] = useState("");
  // const [searchResults, setSearchResults] = useState([]);
  const videos = useSelector((state) => state.videos);
  let selectedVideoId = "";
  let selectedVideoTitle = "";

  console.log(videos);

  if (videos.length) {
    selectedVideoId = `https://www.youtube.com/watch?v=${videos[0].id.videoId}`;
    selectedVideoTitle = videos[0].snippet.title;
  }

  const dispatch = useDispatch();
  const handleChange = (e) => {
    setSearchVideo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getVideoSearch(searchVideo));
  };
  console.log(setSearchVideo);

  return (
    <Container>
      <form onSubmit={handleSubmit} className="row mt-5">
        <Col lg={9}>
          <div className="search-wrapper pb-3">
            <input
              className="w-100 px-2"
              type="text"
              name="search"
              id="search"
              placeholder="Search"
              value={searchVideo}
              onChange={handleChange}
            />
          </div>
        </Col>
        <Col lg={3}>
          <div className="button-wrapper">
            <Button variant="secondary" onClick={handleSubmit}>
              Search
            </Button>
            {""}
          </div>
        </Col>
      </form>
      <Row>
        {!videos.length ? (
          <Col lg={9}>
            <h1 className="text-center">Search your video</h1>
          </Col>
        ) : (
          <Col lg={9}>
            <Player
              url={`https://www.youtube.com/watch?v=${selectedVideoId}`}
            />
            <Row>
              <Col md={10} className="video-player-title p-3">
                <h1>{selectedVideoTitle}</h1>
              </Col>
              <Col md={2} className="p-3">
                {/* <Button variant="secondary" className="w-100 ">
                  Info
                </Button> */}
                <div className="btn secondary">
                  <Link to="/info">Info</Link>
                </div>
                {""}
              </Col>
            </Row>
          </Col>
        )}

        <Col lg={3}>
          <div className="related-videos">
            {videos.splice(1, 3).map((video, i) => (
              <VideoCard
                key={i}
                title={video.snippet.title}
                channel={video.snippet.channelTitle}
                image={`https://i.ytimg.com/vi/${video.id.videoId}/hqdefault.jpg`}
              />
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
