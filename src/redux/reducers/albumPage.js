import { SPECIFIC_CARD } from "../actions/albumAction";
import { PLAY_ALBUM } from "../actions/albumAction";

const initialState = {
  specificCard: {},
  playAlbum: {},
};

const album = (state = initialState, action) => {
  switch (action.type) {
    case SPECIFIC_CARD:
      return {
        ...state,
        specificCard: action.payload,
      };
    case PLAY_ALBUM:
      return {
        ...state,
        playAlbum: action.payload,
      };
    default:
      return state;
  }
};

export default album;
