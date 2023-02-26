import {
  SEARCH_RESULTS,
  IS_LOADING,
  HAS_ERROR,
  ROCK,
  POP,
  HIPHOP,
  CARD_ID,
  SPECIFIC_CARD,
  ALL_TRACKS,
  PLAY_ALBUM,
  MY_FAV_SONGS,
  REMOVE_FROM_FAV,
} from "../actions";

const initialState = {
  arrSong: {
    rockArr: [],
    popArr: [],
    hiphop: [],
  },
  specificCard: {},
  hasError: false,
  isLoading: true,
  cardId: null,
  tracks: {},
  playAlbum: {},
  searchResult: "",
  myFavSongs: [],
  fetchSongs: "",
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_SONG":
      return {
        ...state,
        fetchSongs: [action.payload],
      };
    case SEARCH_RESULTS:
      return { ...state, searchResult: action.payload };
    case IS_LOADING:
      return { ...state, isLoading: false };
    case HAS_ERROR:
      return { ...state, hasError: true };
    case ROCK:
      return {
        ...state,
        arrSong: { ...state.arrSong, rockArr: action.payload },
      };
    case POP:
      return {
        ...state,
        arrSong: { ...state.arrSong, popArr: action.payload },
      };
    case HIPHOP:
      return {
        ...state,
        arrSong: { ...state.arrSong, hiphopArr: action.payload },
      };
    default:
      return state;
  }
};
export default mainReducer;
