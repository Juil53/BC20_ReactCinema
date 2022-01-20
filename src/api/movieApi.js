import axiosClient from "./axiosClient";
const movieApi = {
  getAllMovies: (params) => {
    return axiosClient.get("QuanLyPhim/LayDanhSachPhimPhanTrang", { params });
  },
};
export default movieApi;
