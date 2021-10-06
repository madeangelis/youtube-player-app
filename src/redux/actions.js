import axios from "axios";
import apiKey from "../api/api";

import {
  GET_VIDEO_SUCCESS,
  GET_VIDEO_REQUEST,
  GET_VIDEO_FAILURE,
} from "./types";

const getVideoRequest = () => ({ type: GET_VIDEO_REQUEST });
const getVideoSuccess = (data) => ({
  type: GET_VIDEO_SUCCESS,
  payload: data,
});
const getVideoFailure = () => ({ type: GET_VIDEO_FAILURE });

export function getVideoSearch(query) {
  return function (dispatch) {
    dispatch(getVideoRequest());

    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&q=${query}&type=video&key=${apiKey}`
      )
      .then((result) => {
        dispatch(getVideoSuccess(result.data));
      })
      .catch((error) => {
        dispatch(getVideoFailure(error));
      });
  };
}
