import React from "react";
import { Layout, Menu } from "antd";
import {Link} from "react-router-dom";
import {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
    PieChartOutlined
  } from "@ant-design/icons";

function SidebarComponent() {
    const { SubMenu } = Menu;
    const { Sider } = Layout;
  return (
    <>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={["dashboard"]}
          style={{ height: "100%", borderRight: 0 }}
        >
          <Menu.Item key="dashboard" icon={<PieChartOutlined />}>
            <Link to="/">Dashboard</Link>
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="Master Data">
            <Menu.Item key="1"><Link to="/profesi">Profesi</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/profesional">Profesional</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/member">Member</Link></Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="Transaksi">
            <Menu.Item key="5"><Link to="/booking">Booking</Link></Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<NotificationOutlined />} title="Setting">
            <Menu.Item key="9">Admin</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    </>
  );
}

export default SidebarComponent;
