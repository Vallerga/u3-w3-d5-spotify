import { SPECIFIC_CARD } from "../actions/albumAction";
import { PLAY_ALBUM } from "../actions/albumAction";
import { LIKE_SONG } from "../actions/albumAction";

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
      let selectedSong = action.payload;
      let songList = [...state.likedSong];
      if (!songList.includes(selectedSong)) {
        songList.push(action.payload);
      }
      return {
        ...state,
        likedSong: songList,
      };
    default:
      return state;
  }
};

export default album;
