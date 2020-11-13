import React from "react";
import { Layout, Row, Card, Col } from "antd";

import HeaderComponent from "../components/HeaderComponent";
import SidebarComponent from "../components/SidebarComponent";

function Dashboard() {
  const { Content } = Layout;

  return (
    <>
      <Layout>
        <HeaderComponent />
        <Layout>
          <SidebarComponent />
          <Layout style={{ padding: "10px  24px 24px" }}>
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
                <Row justify="space-around">
                  <Col span={4}>
                    <Card title="PROFESI" bordered={false}>
                     5
                    </Card>
                  </Col>
                  <Col span={4}>
                    <Card title="PROFESIONAL" bordered={false}>
                      20
                    </Card>
                  </Col>
                  <Col span={4}>
                    <Card title="MEMBER" bordered={false}>
                      100
                    </Card>
                  </Col>
                  <Col span={4}>
                    <Card title="TRANSAKSI" bordered={false}>
                     Rp 100.000.000,-
                    </Card>
                  </Col>
                </Row>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
}

export default Dashboard;
