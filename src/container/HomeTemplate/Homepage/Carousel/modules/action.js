import * as ActionType from "./constant";
import api from "../../../../../Utils/apiUtils";

//Get data from Api, dispatch data to Carousel Reducer

export const actCarousel = () => {
  return (dispatch) => {
    dispatch(actCarouselRequest());
    api
      .get("https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachBanner")
      .then((result) => {
        dispatch(actCarouselSuccess(result.data.content));
      })
      .catch((error) => {
        dispatch(actCarouselFailed(error));
      });
  };
};

const actCarouselRequest = () => {
  return {
    type: ActionType.CAROUSEL_REQUEST,
  };
};

const actCarouselSuccess = (data) => {
  return {
    type: ActionType.CAROUSEL_SUCCESS,
    payload: data,
  };
};

const actCarouselFailed = (err) => {
  return {
    type: ActionType.CAROUSEL_FAILED,
    payload: err,
  };
};

