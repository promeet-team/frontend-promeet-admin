import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useHistory } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux';
import {getBookingAction, getBookingDetailAction, getEditBookingAction } from '../../redux/actions/bookingAction';

function DetailBooking() {
    const dispatch = useDispatch()
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        // eslint-disable-next-line
        dispatch(getBookingDetailAction(id));
        // eslint-disable-next-line
    }, []);

    const detailBooking = useSelector((state) => state.booking.data);
    console.log('detail book', detailBooking)
    console.log('detail book fullname', detailBooking.userId.fullName)

    // console.log("component detail booking", detailBooking);

    const [status, setStatus] = useState(
         {value: "Pending"}
        );

    const handleChange = e => {
        setStatus({
            ...status,
            [e.target.name] : e.target.value
        });
      };
    
    //   const handleChange2 = e => {
    //     console.log('radio1 checked', e.target.value);
    //     setStatus({
    //       value2: e.target.value,
    //     });
    //   };

    console.log('stus', status)
    const handleSubmit = (event) => {
        dispatch(getEditBookingAction(status, event, id))
        dispatch(getBookingAction());
        history.push('/booking')
    }
        return (
        <>
        <p>details</p>

        {/* <form>
            <label>Status Booking</label><br />
          
            <input type="radio"  checked={status === 'Pending'} onChange={() => setStatus('Pending')} />
            <label htmlFor="">Pending</label><br />

            <input type="radio"  checked={status === 'Success'} onChange={() => setStatus('Success')} />
            <label htmlFor="">Sukses</label><br />
            <button  onClick={handleSubmit}>Update</button> 
         </form> */}

         <form>
         <label>Status Booking</label><br />
          
         <label>
         Status Booking:
          <select name ='status' value={status.value} onChange={handleChange}  >
          <option value="Pending">Pending</option>
            <option value="Proses">Proses</option>
            <option value="Success">Success</option>
            <option value="Failed">Failed</option>
          </select>
        </label>

          {/* <input type="text" name="status" value={stat.status} onChange={handleChange1} />
          <label htmlFor="">Pending</label><br /> */}

          {/* <input type="radio" value={status.value2} onChange={handleChange2} />
          <label htmlFor="">Sukses</label><br /> */}
          <button  onClick={handleSubmit}>Update</button> 
         </form>

        </>
    )
}

export default DetailBooking;

