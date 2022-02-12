import * as ActionType from "./constant";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const addUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADDUSER_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    case ActionType.ADDUSER_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    case ActionType.ADDUSER_FAILED:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};
export default addUserReducer