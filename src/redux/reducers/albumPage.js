import { SPECIFIC_CARD } from "../actions/albumAction";
import { PLAY_ALBUM } from "../actions/albumAction";
import { LIKE_SONG } from "../actions/albumAction"

const initialState = {
  specificCard: {},
  playAlbum: {},
  likedSong: [],
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
    case LIKE_SONG:
      return {
        ...state,
        likedSong:[state.likedSong, action.payload]
      }
    default:
      return state;
  }
};

export default album;
