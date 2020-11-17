import React, { useState, useEffect } from "react";

import moment from 'moment';
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Layout, Descriptions } from "antd";

import { useSelector, useDispatch } from "react-redux";
import {
  getBookingAction,
  getBookingDetailAction,
  getEditBookingAction,
} from "../../redux/actions/bookingAction";
import HeaderComponent from "../../components/HeaderComponent";
import SidebarComponent from "../../components/SidebarComponent";
import "../styles/Style.css";

function DetailBooking() {
  const { Content } = Layout;

  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    // eslint-disable-next-line
    dispatch(getBookingDetailAction(id));
    // eslint-disable-next-line
  }, [dispatch]);

  const detailBooking = useSelector((state) => state.booking.data);
  console.log("detail book", detailBooking);
  // console.log('detail book fullname', detailBooking.userId.fullName)

  // console.log("component detail booking", detailBooking);

  const [status, setStatus] = useState({ statusUpdate: "" });

  const handleChange = (e) => {
    setStatus({
      ...status,
      [e.target.name]: e.target.value,
    });
  };

  console.log("status", status);
  const handleSubmit = (event) => {
    dispatch(getEditBookingAction(status, event, id));
    dispatch(getBookingAction());
    history.push("/booking");
  };
  return (
    <>
      <Layout>
        <HeaderComponent />
        <Layout>
          <SidebarComponent />
          {detailBooking !== undefined ? (
 <div>
 <Descriptions
   title="Detail Booking"
   style={{marginLeft: "30px", marginTop:"20px"}}
   bordered
   column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
 >
   <Descriptions.Item label="Nama Pemesan">
     {detailBooking.userId.fullName}
   </Descriptions.Item>
   <Descriptions.Item label="Status">{detailBooking.status}</Descriptions.Item>
   <Descriptions.Item label="Waktu">{moment(detailBooking.profileId.startDateAvailable).format('L')}</Descriptions.Item>
    <Descriptions.Item label="Nama Konsultan">{detailBooking.profileId.userId.fullName}</Descriptions.Item>
    <Descriptions.Item label="Total">${detailBooking.total}</Descriptions.Item>
   <Descriptions.Item label="Transfer">{detailBooking.transferId.nameMethod}</Descriptions.Item>
   <Descriptions.Item label="Deskripsi">
     {detailBooking.profileId.description}
   </Descriptions.Item>
   <Descriptions.Item label="Perubahan Status">
     <form>
       <label>Status Booking</label>
       <br />

       <label>
         {/* Status Booking <span style={{marginRight: "10px"}}></span> */}
         <select
           name="status"
           onChange={handleChange}
           placeholder="Masukkan Status"
         >
           <option defaultValue="Pending">Pending</option>
           <option defaultValue="Proses">Proses</option>
           <option defaultValue="Success">Success</option>
           <option defaultValue="Failed">Failed</option>
         </select>
       </label>
       <span style={{marginLeft: "10px"}}>

       <button  onClick={handleSubmit}> Update</button>
       </span>
     </form>
   </Descriptions.Item>
 </Descriptions>
</div>
          ) : (
              <p>Loading</p>
          )}
         
        </Layout>
      </Layout>
    </>
  );
}

export default DetailBooking;
