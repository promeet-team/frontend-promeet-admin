import Axios from 'axios';

export const GET_BOOKING = 'GET_BOOKING';
export const GET_BOOKING_DETAIL = 'GET_BOOKING_DETAIL';
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

export function getDetailBooking (data) {
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