import * as ActionType from "./constant";
import api from "../../../../Utils/apiUtils";

//Get data from Api, dispatch data to Movies Reducer

export const actDetailMovies = (id) => {
  return (dispatch) => {
    dispatch(actDetailMovieRequest());
    api
      .get(`QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)
      .then((result) => {
        dispatch(actDetailMovieSuccess(result.data.content));
      })
      .catch((error) => {
        dispatch(actDetailMovieFailed(error));
      });
  };
};

const actDetailMovieRequest = () => {
  return {
    type: ActionType.DETAILMOVIES_REQUEST,
  };
};

const actDetailMovieSuccess = (data) => {
  return {
    type: ActionType.DETAILMOVIES_SUCCESS,
    payload: data,
  };
};

const actDetailMovieFailed = (err) => {
  return {
    type: ActionType.DETAILMOVIES_FAILED,
    payload: err,
  };
};
