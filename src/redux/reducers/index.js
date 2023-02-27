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

const redu = (state = initialState, action) => {
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
    case CARD_ID:
      return { ...state, cardId: action.payload };
    case SPECIFIC_CARD:
      return {
        ...state,
        specificCard: action.payload,
      };
    default:
      return state;
  }
};
export default redu;
