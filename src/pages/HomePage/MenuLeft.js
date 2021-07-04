import React from "react";
import { Menu } from "antd";
import * as dataMenu from "./../../routers/dataMenu";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

const { SubMenu } = Menu;

function renderRouter(dataMenu, parentKey = 0) {
  return dataMenu.map((item, index) =>
    Array.isArray(item.children) && item.children.length > 0 ? (
      <SubMenu key={`${parentKey}-${index}`} title={item.name}>
        {renderRouter(item.children, `${parentKey}-${index}`)}
      </SubMenu>
    ) : (
      <Menu.Item key={`${parentKey}-${index}`}>
        <Link key={index} className="nav-link" to={item.to} exact={item.exact}>
          <i className="fas fa-fw fa-chart-area"></i>
          <span>{item.name}</span>
        </Link>
      </Menu.Item>
    )
  );
}

function MenuLeft({ checkToogle, colorMenu, account_current }) {
  return (
    <>
      {checkToogle && (
        <Menu
          style={{
            width: 256,
            color: "Highlight",
          }}
          theme={`${colorMenu ? "dark" : "light "}`}
          mode="inline"
          collapsedWidth="100%"
        >
          {account_current.quyen === "QuanTri"
            ? renderRouter(dataMenu.menusListQuanTri)
            : renderRouter(dataMenu.menusListUser)}
        </Menu>
      )}
    </>
  );
}

export default MenuLeft;