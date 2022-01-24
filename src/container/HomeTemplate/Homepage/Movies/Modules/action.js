import * as ActionType from "./constant";
import api from "../../../../../Utils/apiUtils";

//Get data from Api, dispatch data to Movies Reducer

export const actMovies = () => {
  return (dispatch) => {
    dispatch(actMovieRequest());
    api
      .get("QuanLyPhim/LayDanhSachPhim?maNhom=GP07")
      .then((result) => {
        dispatch(actMovieSuccess(result.data.content));
      })
      .catch((error) => {
        dispatch(actMovieFailed(error));
      });
  };
};

const actMovieRequest = () => {
  return {
    type: ActionType.MOVIES_REQUEST,
  };
};

const actMovieSuccess = (data) => {
  return {
    type: ActionType.MOVIES_SUCCESS,
    payload: data,
  };
};

const actMovieFailed = (err) => {
  return {
    type: ActionType.MOVIES_FAILED,
    payload: err,
  };
};
