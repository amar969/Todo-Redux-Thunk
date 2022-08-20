import axios from "axios"; 
const API_URL = "https://masai-api-mocker.herokuapp.com/auth/"

export const login_service = (username, password) => {
    console.log("From auth service", username, password)
    return  axios ({
        method: "POST", 
        url: API_URL + "login",
        data: {
            username: username, 
            password: password
        }

    })
   
    .then((response) => {
        console.log(response)
        if(response.token){
            localStorage.setItem("user", JSON.stringify(response))
        }
        return response
    })
    .catch((error) => {
        console.log(error)
    })
    
    
    //getData = async() => {

    //     const payload= {
    //         username: username, 
    //         password: password        }

    //     try{
    //         let res = await fetch( API_URL + "login" ,
    //             {
    //               method: "POST",
    //               body: JSON.stringify(payload),
    //               headers: {
    //                 "Content-Type": "application/json",
    //               },
    //             }
    //           );
    //           let data = await res.json();
    //           console.log(data);
    //           if(data.token) localStorage.setItem("user", JSON.stringify(data))
        
    //         } catch (error) {
    //             console.log(error)
    //             alert("Invalid login")
    //         }
    // }
    
    
    
    
   
}

export const logout = () => {
    localStorage.removeItem("user")
}

