import {
    GET_BOOKING, GET_BOOKING_DETAIL, EDIT_BOOKING
} from '../actions/bookingAction';

const initialState = {
    listBooking : [],
    detailBooking : [],
 
  
}

export default function booking(state = initialState, action) {
    switch (action.type) {
        case GET_BOOKING:
            return{
                ...state,
                data: action.playload
            }
        case GET_BOOKING_DETAIL: 
            return {
                ...state,
                data: action.playload,
            }
        case EDIT_BOOKING :
            return {
                ...state,
                data:action.playload
            }
        default:
            return state;
    }
}