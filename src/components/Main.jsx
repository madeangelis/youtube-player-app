import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

import Player from "./player/Player";

import Message from "./Message";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";

const Main = () => {
  
  const videoList = useSelector((state) => state.videos);
  const video = videoList[0];
  const loading = useSelector((state) => state.isLoading);

  return (
    <Container>
      <SearchBar />
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

        <VideoList videoList={videoList} />
      </Row>
    </Container>
  );
};

export default Main;
