import React, {  useEffect, useState } from "react";
import { Layout } from "antd";
import { Table, Modal, Tag, Space } from "antd";

// import { Switch } from "antd";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getBookingAction } from "../../redux/actions/bookingAction";

import HeaderComponent from "../../components/HeaderComponent";
import SidebarComponent from "../../components/SidebarComponent";
import "../styles/Style.css";

function Booking() {
  const { Content } = Layout;

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getBookingAction());
  }, [dispatch]);

  const listBooking = useSelector((state) => state.booking.data);
  console.log("booking di component", listBooking);

  const [visible, setVisible] = useState(false);

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
              <table className="booking">
                <thead>
                  <tr>
                    <th>Kode Invoice</th>
                    <th>Nama Pemesan</th>
                    <th>Konsultan</th>
                    <th>Profesi</th>
                    <th>Total</th>
                    <th>Bukti Transfer</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>

                {listBooking !== undefined
                  ? listBooking.map((item, index) => (
                      <tbody key={index}>
                        <tr>
                          <td>{item.codeInvoice}</td>
                          <td>{item.userId.fullName}</td>
                          <td>{item.profileId.userId.fullName}</td>
                          <td>{item.profileId.profesiId.nameProfesi}</td>
                          <td>{item.total}</td>
                          <td>{item.imgUrl}</td>
                          <td>{item.status}</td>

                          <td>
                            <a>Detail</a> <br />
                            <p  key="submit"  type="primary" onClick={() => setVisible(true)}>
                              update
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    ))
                  : null}
              </table>

              <Modal
                title="Modal 1000px width"
                centered
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                width={'45%'}
              >
                <p>some contents...</p>
                <p>some contents...</p>
                <p>some contents...</p>
              </Modal>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
}

export default Booking;
