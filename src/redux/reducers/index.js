import {combineReducers} from "redux";
import admin from './adminReducer';

const rootReducers = combineReducers({
    admin,
  });
  
  export default rootReducers;