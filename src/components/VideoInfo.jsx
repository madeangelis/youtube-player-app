import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Image from "react-bootstrap/Image";

const VideoInfo = ({ title, image, description }) => {
  return (
    <Container>
      <Row className="mt-5 mb-2">
        <Col>
          <Button variant="secondary" className="w-25">
            Back
          </Button>
          {""}
          <h1 className="my-3">{title}</h1>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col lg={9}>
          <Image src={image} fluid />
        </Col>
        <Col lg={3}>
          <div className="video-info">
            <p>{description}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default VideoInfo;
