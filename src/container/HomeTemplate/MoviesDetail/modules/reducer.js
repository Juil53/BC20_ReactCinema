import * as ActionType from "./constant"
const initialState = {
  loading: false,
  data: null,
  error: null,
};

const DetailMoviesReducer = (state = initialState, action) => {
    switch (action.type) {
      case ActionType.DETAILMOVIES_REQUEST:
        state.loading = true;
        state.data = null;
        state.error = null;
        return { ...state };
      case ActionType.DETAILMOVIES_SUCCESS:
        state.loading = false;
        state.data = action.payload;
        state.error = null;
        return { ...state };
      case ActionType.DETAILMOVIES_FAILED:
        state.loading = false;
        state.data = null;
        state.error = action.payload;
        return { ...state };
      default:
        return { ...state };
    }
  };
  export default DetailMoviesReducer;