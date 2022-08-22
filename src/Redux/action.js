import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, PROFILE, REGISTER_FAIL, REGISTER_SUCCESS } from "./actionType";


export const Logout = () => (dispatch) => {
  localStorage.removeItem("user")
  dispatch({
    type: LOGOUT,
  });
  localStorage.removeItem("user")
};

const API_URL = "https://masai-api-mocker.herokuapp.com/"


export const Login_Service = (username, password) => async(dispatch) => {
  const payload = {
    "username": username,
    "password": password,
  };
  try {
    let res = await fetch( API_URL + "auth/login", {
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
    dispatch(LOGIN_FAIL)
    alert("Invalid login credentials");
  }
};


export const Register = (data) => async(dispatch) => {
    const payload = {
        "name": data.name, 
        "email": data.email,
        "password": data.password,
        "username": data.username, 
        "mobile": data.mobile, 
        "description": data.description
    }

    if(data.username == "") return
    try {
        let res = await fetch( API_URL + "auth/register", {
            method: "POST", 
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json"
            }
        })
        let data1 = await res.json()
        console.log(data1)
        if(data1.message == "Registration Success"){
            dispatch(REGISTER_SUCCESS)
        }
        if(data1.message == "Registration failed, user already exists"){
            alert("User already exist. Please try to login with your credentials.")
        }

    } catch (error) {
        dispatch(REGISTER_FAIL)
        console.log(error)
    }
}

// export const getProfile = () => async(dispatch) => {
//     try {
//         let username = JSON.parse(localStorage.getItem("username"))
//         let userToken = JSON.parse(localStorage.getItem("user"))
//         console.log(userToken.token)
//         let res = await fetch(API_URL + "user/" + username, {
//             method: "GET", 
//             headers: {
//                 "Authorization": "Bearer " + userToken.token ,
//             }
//         })
//         let data = await res.json()
//         console.log(data)
//         if(data.username){
//             dispatch(PROFILE)
//         }

//     } catch (error) {
//         console.log(error)
//     }
// }




