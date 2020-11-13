import { LOGIN } from "../actions/adminAction";
const token = localStorage.getItem("token");

const initialState = token
  ? {
      isLogged: true,
      data: [],
      error: null,
    }
  : {
      isLogged: false,
      data: [],
      error: null,
    };

export default function admin(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogged: true,
      };
    default:
      return state;
  }
}
