import React from "react";
import { Layout, Menu } from "antd";


import './StyleComponent.css'

function HeaderSidebarComponent() {
  const { Header } = Layout;
  return (
    <>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">LOGO</Menu.Item>
            <Menu.Item className="MenuRight" key="2">admin</Menu.Item>
          </Menu>
        </Header>
    </>
  );
}

export default HeaderSidebarComponent;
