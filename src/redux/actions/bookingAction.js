import Axios from 'axios';

export const GET_BOOKING = 'GET_BOOKING';
export const GET_BOOKING_DETAIL = 'GET_BOOKING_DETAIL';
export const GET_EDIT_BOOKING = 'GET_EDIT_BOOKING';
export const EDIT_BOOKING = 'EDIT_BOOKING';

export function getBooking (data) {
    return {
        type: GET_BOOKING,
        playload: data,
    }
}

export function getBookingDetail (data) {
    return {
        type: GET_BOOKING_DETAIL,
        playload: data
    }
}


export function getEditBooking (data) {
    return {
        type: EDIT_BOOKING,
        playload: data,
    }
}



export const getBookingAction = ()  => {
    return async (dispatch) => {
        const response = await Axios
        .get('http://server-promeet.herokuapp.com/api/admin/data/booking');
        dispatch(getBooking(response.data.booking));
        console.log('hasil ambil data booking', response.data.booking);
    }
}

export const getBookingDetailAction = (id) => {
    return async(dispatch) => {
        const response = await Axios 
        .get(`http://server-promeet.herokuapp.com/api/admin/data/booking/${id}`);
        dispatch(getBookingDetail(response.data.booking));
        console.log('hasil detail', response.data.booking);
    }
}

 export const getEditBookingAction = (status, event, id) => {
    return async(dispatch) => {    
        event.preventDefault();
        console.log('isi status', status)    
        return Axios
        .put(`http://server-promeet.herokuapp.com/api/admin/edit-booking/${id}`, status)
        .then((response) => {
            console.log('response edit', response.data.booking)
            dispatch(getEditBooking(response.data.booking))
        })
        .catch((error) => {
            console.log(` hasil eror edit ${error}`);
        })
    }
}

