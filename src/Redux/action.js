import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, PROFILE, REGISTER_FAIL, REGISTER_SUCCESS, IN_PROGRESS_PERSONAL_COUNT, TODO_PERSONAL_COUNT, DONE_PERSONAL_COUNT, TODODATA, INPROGRESSDATA, DONEDATA } from "./actionType";


export const Logout = () => (dispatch) => {
  localStorage.removeItem("user")
  dispatch({
    type: LOGOUT,
  });
  localStorage.removeItem("user")
};

const API_URL = "https://masai-api-mocker.herokuapp.com/"


export const inProgressPersonalCount = (data) => ({
    type: IN_PROGRESS_PERSONAL_COUNT,
    payload: data,
  });
  
  export const todosPersonalCount = (data) => ({
    type: TODO_PERSONAL_COUNT,
    payload: data,
  });
  
  export const donesPersonalCount = (data) => ({
    type: DONE_PERSONAL_COUNT,
    payload: data,
  });

  export const todosDatas = (data) => ({
    type: TODODATA,
    payload: data,
  });
  
  export const inProgressDatas = (data) => ({
      type: INPROGRESSDATA,
      payload: data
  }) 
  
  export const doneDatas = (data) => ({
      type: DONEDATA, 
      payload: data
  })
  


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
            alert("Register Successfull")
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


export const getTodoData = () => async (dispatch) => {
    try {
        let res = await fetch(
            "https://notes-json-server-44.herokuapp.com/notes?todo_status=Todo"
            );
            let data = await res.json();
            console.log(data);
            dispatch(todosDatas(data));
        } catch (error) {
            console.log(error);
        }
    };

    export const getInProgress = () => async (dispatch) => {
        try {
            let res = await fetch(
              "https://notes-json-server-44.herokuapp.com/notes?todo_status=In Progress"
            );
            let data = await res.json();
            console.log(data);
            dispatch(inProgressDatas(data));
        } 
        catch (error) {
            console.log(error);
        }
    };
    
    export const getDoneData = () => async(dispatch) => {
        try {
            
            let res = await fetch(
                "https://notes-json-server-44.herokuapp.com/notes?todo_status=Done"
            )
            let data = await res.json()
            console.log(data)
            dispatch(doneDatas(data))
        } catch (error) {
            console.log(error)
        }
    }

    export const getPersonalCount = () => async (dispatch) => {
        try {
          let res1 = await fetch(
            "https://notes-json-server-44.herokuapp.com/notes?todo_status=Todo&todo_tag=Personal"
          );
          let data1 = await res1.json();
          console.log(data1.length);
          dispatch(todosPersonalCount(data1.length));
        } catch (error) {
          console.log(error);
        }
    }