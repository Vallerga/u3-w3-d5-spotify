const initialState = {
    fetchSongs: ''
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SELECT_SONG':
      return {
        ...state,
        fetchSongs: [action.payload]
      }
      default:
      return state;
    }
}
export default mainReducer