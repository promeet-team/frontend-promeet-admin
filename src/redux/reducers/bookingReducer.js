import {
    GET_BOOKING
} from '../actions/bookingAction';

const initialState = {
    listBooking : [],
    detailBooking : []
}

export default function booking(state = initialState, action) {
    switch (action.type) {
        case GET_BOOKING:
            return{
                ...state,
                data: action.playload
            }
    
        default:
            return state;
    }
}