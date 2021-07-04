import { combineReducers } from "redux";
import quanlytaikhoan from "./quanlytaikhoan";
import quanlylogin from "./quanlylogin";
import quanlythongbao from "./quanlythongbao";
import quanly_cmnd from "./quanly_cmnd";
import quanlyKhoAoQuan from "./quanlykhoAoQuan";
import quanlySize from "./quanly_size";
import loaiSanPham from "./quanly_loaiSanPham";
import sanPhamDuoc from "./quanly_sanphamDuoc";

const appReducers = combineReducers({
  quanlytaikhoan,
  quanlylogin,
  quanlythongbao,
  quanly_cmnd,
  quanlyKhoAoQuan,
  quanlySize,
  loaiSanPham,
  sanPhamDuoc,
});

export default appReducers;
