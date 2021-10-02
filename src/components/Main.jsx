import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getVideoSearch } from "../redux/actions";
import Player from "./player/Player";
import VideoCard from "./VideoCard";
import Message from "./Message";

const Main = () => {
  const [searchVideo, setSearchVideo] = useState("");
  // const [searchResults, setSearchResults] = useState([]);
  const video = useSelector((state) => state.videos[0]);
  const videoList = useSelector((state) => state.videos);
  const loading = useSelector((state) => state.isLoading);

  const dispatch = useDispatch();
  const handleChange = (e) => {
    setSearchVideo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getVideoSearch(searchVideo));
  };

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
        {video == null ? (
          <Col lg={9}>
            {loading ? (
              <Message message="Searching..." />
            ) : (
              <Message message="Search your video" />
            )}
          </Col>
        ) : (
          <Col lg={9}>
            <Player
              url={`https://www.youtube.com/watch?v=${video.id.videoId}`}
            />
            <Row>
              <Col md={10} className="video-player-title p-3">
                <h1>{video.snippet.title}</h1>
              </Col>
              <Col md={2} className="p-3">
                <Link to="/info">
                  <Button variant="secondary" className="w-100">
                    Info
                  </Button>
                  {""}
                </Link>
              </Col>
            </Row>
          </Col>
        )}

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
      </Row>
    </Container>
  );
};

export default Main;
