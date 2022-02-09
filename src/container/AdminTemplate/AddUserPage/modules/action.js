import * as ActionType from "./constant";
import api from "./../../../../Utils/apiUtils";

export const actAddUser = (user) => {
  return (dispatch) => {
    dispatch(actAddUserRequest());
    api
      .post("QuanLyNguoiDung/ThemNguoiDung", user)
      .then((result) => {
        dispatch(actAddUserSuccess(result.data.content));
      })
      .catch((error) => {
        dispatch(actAddUserFailed(error));
      });
  };
};

const actAddUserRequest = () => {
  return {
    type: ActionType.ADDUSER_REQUEST,
  };
};

const actAddUserSuccess = (data) => {
  return {
    type: ActionType.ADDUSER_SUCCESS,
    payload: data,
  };
};

const actAddUserFailed = (error) => {
  return {
    type: ActionType.ADDUSER_FAILED,
    payload: error,
  };
};
