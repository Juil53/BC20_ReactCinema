import axiosClient from "./axiosClient";
const movieApi = {
  getAllMovies: (params) => {
    return axiosClient.get("QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP07", {
      params,
    });
  },
  getMovieById: (id) => {
    return axiosClient.get(
      `/QuanLyPhim/LayThongTinPhim?maNhom=GP07&MaPhim=${id}`
    );
  },
  getShowTimes: (id) => {
    return axiosClient.get(`/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`);
  },
  getSeatById: (id) => {
    return axiosClient.get(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`);
  },
  bookingTicket: (data) => {
    return axiosClient.post("/QuanLyDatVe/DatVe", data);
  },
  getAllUSer: () => {
    return axiosClient.get("/QuanLyNguoiDung/LayDanhSachNguoiDung?maNhom=GP07");
  },
  deleteUser: (id) => {
    return axiosClient.delete(`QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${id}`);
  },
  changeUser: (data) => {
    return axiosClient.put("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", data);
  },
};
export default movieApi;
