import React from "react";
import {Link, Navigate} from "react-router-dom"; 
import { useDispatch, useSelector } from "react-redux";
import { Login_Service } from "../Redux/action";


export const Login = () => {
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("");
  const {isLoggedIn} = useSelector(state => state.auth)


  const dispatch = useDispatch()
  const getData = async () => {
    if(username == "" && password == "") return
    dispatch(Login_Service(username, password))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  const handleClick = () => {
    console.log(username, password);
  };

  React.useEffect(() => {
    getData();
  }, []);

  if(isLoggedIn){
      return (<Navigate to="/" />)
  }
  

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "200px",
          width: "400px", 
          flexDirection:"column",
          marginLeft: "600px"
        }}
      >
          <div style={{ display: 'flex', justifyContent: "center", alignItems:"center", gap: "20px", marginBottom: "20px" }} >
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Y3QNhjNGdpNBRoCxZ6OEaHTyrwzwdahgtg&usqp=CAU" alt="Note app" width="100px" height="100px" />  
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
       
        </div>
        <form onSubmit={handleSubmit}>

          <div className="form-floating" >
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Username"
            />
            <label for="floatingInput">Username</label>
          </div>

          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>

          <button
            className="w-100 btn btn-lg btn-primary"
            type="submit"
            onClick={handleClick}
          >
            Log In
          </button>
        </form>

        <div>New to app? <Link to="/Signup"> Sign Up </Link></div>
      </div>
    </>
  );
};
