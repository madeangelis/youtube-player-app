import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";

import { useSelector } from "react-redux";
import Image from "react-bootstrap/Image";
import { useHistory } from "react-router";

const VideoInfo = () => {
  const video = useSelector((state) => state.videos[0]);
  const history = useHistory();

  const handleBack = (e) => {
    e.preventDefault();
    history.replace("/");
  };

  return video == null ? (
    <Redirect to="/" />
  ) : (
    <Container>
      <Row className="mt-5 mb-2">
        <Col>
          <Button variant="secondary" className="w-25" onClick={handleBack}>
            Back
          </Button>
          {""}
          <h1 className="my-3">{video.snippet.title}</h1>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col lg={9}>
          <Image src={video.snippet.thumbnails.high.url} fluid />
        </Col>
        <Col lg={3}>
          <div className="video-info">
            <h6>Description:</h6>
            <p>{video.snippet.description}</p>
            <h6>Channel:</h6>
            <p>{video.snippet.channelTitle}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default VideoInfo;
