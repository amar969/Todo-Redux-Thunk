import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from "./actionType";
import { login_service, logout } from "../AuthService/auth.service";

// export const login = (username, password) => (dispatch) => {
//   return login_service(username, password).then(
//     (data) => {
//       dispatch({
//         type: LOGIN_SUCCESS,
//         payload: { user: data },
//       });
//       return Promise.resolve();
//     },
//     (error) => {
//       console.log(error);
//       dispatch({
//         type: LOGIN_FAIL,
//       });
//       return Promise.reject();
//     }
//   );
// };

export const Logout = () => (dispatch) => {
  logout();
  dispatch({
    type: LOGOUT,
  });
  localStorage.removeItem("user")
};

const API_URL = "https://masai-api-mocker.herokuapp.com/"

export const Login_Service = (username, password) => async (dispatch) => {
  const payload = {
    "username": username,
    "password": password,
  };

  try {
    let res = await fetch( "https://masai-api-mocker.herokuapp.com/auth/login", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      }
    });
    
    let data = await res.json();
    console.log(data);
    if (data.token) {
        dispatch({
            type: LOGIN_SUCCESS,
            payload: { user: data },
        });
        localStorage.setItem("user", JSON.stringify(data));
    }
  } catch (error) {
    console.log(error);
    alert("Invalid login");
  }
};


