import axiosClient from "./axiosClient";
const movieApi = {
  getAllMovies: (params) => {
    return axiosClient.get("QuanLyPhim/LayDanhSachPhimPhanTrang", { params });
  },
  getMovieById: (id) => {
    return axiosClient.get(`/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`);
  },
  getShowTimes: (id) => {
    return axiosClient.get(`/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`);
  },
  getSeatById: (id) => {
    return axiosClient.get(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`);
  },
};
export default movieApi;
