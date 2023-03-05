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
    const urlToFetch = "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + endPoint
    try {
      let res = await fetch(urlToFetch);
      if (res.ok) {
        let data = await res.json();
        switch (endPoint) {
          case "rock":
            dispatch({
              type: ROCK,
              payload: data.data,
            });
            break;
          case "pop":
            dispatch({
              type: IS_LOADING,
            });
            dispatch({
              type: POP,
              payload: data.data,
            });
            break;
          case "hiphop":
            dispatch({
              type: IS_LOADING,
            });
            dispatch({
              type: HIPHOP,
              payload: data.data,
            });
            break;
          default:
            break;
        }
      } else {
        dispatch({
          type: IS_LOADING,
        });
        dispatch({
          type: HAS_ERROR,
        });
      }
    } catch (error) {
      alert(error);
      dispatch({
        type: IS_LOADING,
      });
      dispatch({
        type: HAS_ERROR,
      });
    }
  };
};

const dispatchp = () => ({
    type: IS_LOADING,
  })
