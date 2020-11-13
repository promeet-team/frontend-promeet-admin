import axios from 'axios'; 

export const LOGIN = 'LOGIN';
export const LOGIN_FAILED = 'LOGIN_FAILED'
export const LOGOUT = 'LOGOUT';

export const loginSuccess = (data) => ({
    type: LOGIN,
    payload: data,
  });
  
  export const loginFailed = (error) => ({
    type: LOGIN_FAILED,
    payload: error,
  });
  
  export const logout = () => ({
    type: LOGOUT,
  });

  export const setLoginAct =(values, event, history) => {
    return (dispatch) => {
        event.preventDefault();

        return axios
        .post("https://server-promeet.herokuapp.com/api/admin/login", values)
        .then ((response)=> {
          console.log('data', response)

            if(response.data.token !== undefined) {
                localStorage.setItem("token", response.data.token);

            console.log('data login', response.data.token)

                dispatch(loginSuccess(response.data.token));
                history.push("/");

            } else {
               console.log(response.data.message);
            }
        })
        .catch ((error)=>{
            console.log("err", error);
            

        });
    };
}