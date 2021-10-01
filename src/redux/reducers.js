import {
  GET_VIDEO_SUCCESS,
  GET_VIDEO_REQUEST,
  GET_VIDEO_FAILURE,
} from "./types";

const initialState = {
  videos: [],
  isLoading: false,
  isError: false,
};

export default function reducers(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEO_SUCCESS:
      return {
        ...state,
        videos: action.payload.items,
        isLoading: false,
        isError: false,
      };
    case GET_VIDEO_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case GET_VIDEO_FAILURE:
      return { ...state, isLoading: false, isError: true };

    default:
      return state;
  }
}
