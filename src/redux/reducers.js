import {
  GET_VIDEO_SUCCESS,
  GET_VIDEO_REQUEST,
  GET_VIDEO_FAILURE,
  SET_SELECTED_VIDEO,
} from "./types";

const initialState = {
  videos: [],
  isLoading: false,
  isError: false,
  selectedVideo: null,
};

export default function reducers(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEO_SUCCESS:
      return {
        ...state,
        videos: action.payload.items,
        isLoading: false,
        isError: false,
        selectedVideo: action.payload.items[0],
      };
    case GET_VIDEO_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case GET_VIDEO_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case SET_SELECTED_VIDEO:
      return { ...state, selectedVideo: action.payload };
    default:
      return state;
  }
}
