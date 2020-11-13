import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import { Modal } from "antd";

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
  const listBooking = useSelector((state) => state.booking.data);

  useEffect(() => {
    // if(listBooking === undefined) 
    // {
    // }
    dispatch(getBookingAction());
  }, [dispatch]);

  console.log("booking di component", listBooking);

  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState('pending');


  const handleClick = (_id) => {
    history.push(`/data-booking/${_id}`);
  };

  console.log('status', status);
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

                {listBooking !== undefined && listBooking.length > 0
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
                          {/* <p key="submit" type="primary" onClick={() => setVisible(true)}>
                            update
                            </p> */}
                            <a  onClick={() => handleClick(item._id)}>Update Status</a>
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
                onOk={(handleSubmit) => setVisible(false)}
                // onOk={handleSubmit}
                onCancel={() => setVisible(false)}
                width={'45%'}
              >
{/* 
                <form>
                  <label>Status Booking</label><br />
                  <input type="radio" checked={status === 'pending'} onChange={() => setStatus('pending')} />
                  <label htmlFor="">Pending</label><br />

                  <input type="radio" checked={status === 'success'} onChange={() => setStatus('success')} />
                  <label htmlFor="">Sukses</label><br />
                  <button  onClick={handleSubmit}>Update</button>
              
                </form> */}
                <label>Status Booking</label><br />
                  <input type="radio" checked={status === 'pending'} onChange={() => setStatus('pending')} />
                  <label htmlFor="">Pending</label><br />

                  <input type="radio" checked={status === 'success'} onChange={() => setStatus('success')} />
                  <label htmlFor="">Sukses</label><br />
              </Modal>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
}

export default Booking;
