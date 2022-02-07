import * as ActionType from "./constant";
import api from "../../../../Utils/apiUtils";

export const actAuthMovie = (user, history) => {
  return (dispatch) => {
    dispatch(actAuthRequest());
    api
      .post("QuanLyNguoiDung/DangNhap", user)
      .then((result) => {
        if (result.data.content.maLoaiNguoiDung === "KhachHang") {
          return Promise.reject({
            response: {
              data: {
                content: "Bạn không có quyền truy cập!",
              },
            },
          });
        }
        dispatch(actAuthSuccess(result.data.content));
        localStorage.setItem("UserAdmin", JSON.stringify(result.data.content));
        history.replace("/dashboard");
      })
      .catch((error) => {
        dispatch(actAuthFailed(error));
      });
  };
};

const actAuthRequest = () => {
  return {
    type: ActionType.AUTHMOVIE_REQUEST,
  };
};

const actAuthSuccess = (data) => {
  return {
    type: ActionType.AUTHMOVIE_SUCCESS,
    payload: data,
  };
};

const actAuthFailed = (err) => {
  return {
    type: ActionType.AUTHMOVIE_FAILED,
    payload: err,
  };
};
