export const SEARCH_RESULTS = "SEARCH_RESAULTS";
export const IS_LOADING = "IS_LOADING";
export const HAS_ERROR = "HAS_ERROR";
export const ROCK = "ROCK";
export const POP = "POP";
export const HIPHOP = "HIPHOP";
export const CARD_ID = "CARD_ID";
export const ALL_TRACKS = "ALL_TRACKS";
export const SPECIFIC_CARD = "SPECIFIC_CARD";
export const PLAY_ALBUM = "PLAY_ALBUM";
export const MY_FAV_SONGS = "MY_FAV_SONGS";
export const REMOVE_FROM_FAV = "REMOVE_FROM_FAV";

export const fetchFromMusicApi = (endPoint) => {
  return async (dispatch, getState) => {
    try {
      let res = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + endPoint
      );
      if (res.ok) {
        let data = await res.json();
        console.log(data)
        switch (endPoint) {
          case "rock":
            Loading();
            dispatch({
              type: ROCK,
              payload: data.data,
            });
            break;
          case "pop":
            Loading();
            dispatch({
              type: POP,
              payload: data.data,
            });
            break;
          case "hiphop":
            Loading();
            dispatch({
              type: HIPHOP,
              payload: data.data,
            });
            break;
          default:
            break;
        }
      } else {
        Loading();
        dispatch({
          type: HAS_ERROR,
        });
      }
    } catch (error) {
      alert(error);
      Loading();
      dispatch({
        type: HAS_ERROR,
      });
    }
  };
};

const Loading = (dispatch) =>
  dispatch({
    type: IS_LOADING,
  });
