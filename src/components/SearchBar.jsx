import React, { useState } from "react";
import { Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getVideoSearch } from "../redux/actions";

function SearchBar() {
  const [searchVideo, setSearchVideo] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setSearchVideo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getVideoSearch(searchVideo));
  };
  return (
    <>
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
    </>
  );
}

export default SearchBar;
