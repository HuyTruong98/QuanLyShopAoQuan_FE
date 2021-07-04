import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import { SearchOutlined, ShoppingCartOutlined, UserOutlined, DownOutlined } from "@ant-design/icons";
import { Input, Menu, Dropdown } from "antd";
import { useDispatch, useSelector } from 'react-redux';
import * as actUser from "./../../actions/quanlytaikhoan/actQuanLyTaiKhoan";

function NavUserPage(props) {
  const dataAccount = useSelector(state => state.quanlylogin.account_current);
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);

  function logOut() {
    dispatch(actUser.actLogOut({ checkToken: false }));
    localStorage.removeItem("login");
  };

  function onChangeToggle(value) {
    setToggle(!value);
  }

  const MenuLink = ({ label, to, activeOnlyWhenExact, onClick }) => {
    return (
      <Route
        path={to}
        exact={activeOnlyWhenExact}
        children={({ match }) => {
          var active = match ? "active all" : "";
          return (
            <li
              className={active}
              style={{ paddingRight: "15px", marginLeft: "20px" }}
            >
              <Link onClick={onClick} className="collapse-item" to={to}>
                {label}
              </Link>
            </li>
          );
        }}
      />
    );
  };
  const menu = (
    <Menu>
      {dataAccount.checkToken ?
        (
          <>
            <Menu.Item>
              <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                <i
                  className="fa fa-user-o mr-2 text-gray-400"
                  aria-hidden="true"
                ></i> {dataAccount.tenNguoiDung}
              </a>
            </Menu.Item>
            <Menu.Item  >
              <a
                href="#"
                data-toggle="modal"
                data-target="#logoutModal"
                onClick={() => logOut()}
              >
                <i
                  className="fa fa-sign-out  mr-2 text-gray-400"
                  aria-hidden="true"
                ></i>
                Đăng xuất
              </a>
            </Menu.Item>
          </>
        ) : (
          <>
            <Menu.Item >
              <MenuLink label="Đăng nhập" to="/Dang-nhap" activeOnlyWhenExact={false} />
            </Menu.Item>
          </>
        )
      }
    </Menu>
  )


  return (
    <>
      <div className="background-header"></div>
      <div className="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-light navbar-header">
          <div className="col-xl-2 col-lg-2 col-md-6 col-6">
            <a class="navbar-brand" >
              <img src="//bizweb.dktcdn.net/100/331/067/themes/823156/assets/logo.png?1623467495633" width="100%" height="120px" />
            </a>
          </div>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active1">
                <MenuLink class="nav-link" label="TRANG CHỦ" to="/" activeOnlyWhenExact={true} />
              </li>
              <li class="nav-item active1">
                <MenuLink class="nav-link" label="GIỚI THIỆU" to="/Gioi-thieu" activeOnlyWhenExact={false} />
              </li>
              <li class="nav-item active1">
                <MenuLink class="nav-link" label="LIÊN HỆ" to="/lien-he" activeOnlyWhenExact={false} />
              </li>
              <li class="nav-item active1">
                <MenuLink class="nav-link" label="CỬA HÀNG" to="/Cua-hang" activeOnlyWhenExact={false} />
              </li>
              <li class="dropdown1 dropdown-5">
                SẢN PHẨM &ensp;  <DownOutlined />
                <ul class="dropdown_menu dropdown_menu-5">
                  <li class="dropdown_item-1">T-SHIRT</li>
                  <li class="dropdown_item-2">Pants</li>
                  <li class="dropdown_item-3">Hoodie</li>
                  <li class="dropdown_item-4">Jacket</li>
                  <li class="dropdown_item-5">Sơ Mi</li>
                </ul>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0 gio-hang">
              <Input
                size="large"
                placeholder="Tìm kiếm..."
                bordered
                suffix={<SearchOutlined />}
                // onChange={(e) => setSearchKey(e.target.value)}
                style={{ width: 300, marginTop: '12px' }}
              />
              <a class=" my-2 my-sm-0 ml-4" type="submit"><ShoppingCartOutlined /></a>
              <a class=" my-2 my-sm-0 ml-4" type="submit"></a>
              <Dropdown overlay={menu} placement="bottomCenter" arrow>
                <a
                  className="ant-dropdown-link"
                  onClick={() => {
                    onChangeToggle(true);
                  }}
                >
                  <span >
                    {dataAccount.checkToken ? dataAccount.name : <UserOutlined style={{ color: 'white' }} />}
                  </span>
                  {dataAccount.checkToken ? (
                    <img
                      className="img-profile rounded-circle"
                      src={`${dataAccount.img}`}
                      style={{ width: "60px", marginTop: '15px' }}
                    />
                  ) : (
                    ""
                  )}
                </a>
              </Dropdown>
            </form>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavUserPage;