import {combineReducers} from "redux";
import admin from './adminReducer';
import booking from './bookingReducer';


const rootReducers = combineReducers({
    admin,
    booking
  });
  
  export default rootReducers;