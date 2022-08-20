import React from 'react';
import {Link} from "react-router-dom"; 


const initialState = {
    "name": "",
    "email": "", 
    "password": "", 
    "username": "", 
    "mobile": "", 
    "description": "", 
}

export const Signup = () => {
  
    const [data, setData] = React.useState(initialState)
    const handleChange = (e) => {
        let {name, value} = e.target
        setData({ ...data, [name]: value })
    }

    let {name, email, password, username, mobile, description} = data

    const getData = async() => {

        console.log("data", data)
        if(data.username == "") return
         try {
            let res = await fetch( "https://masai-api-mocker.herokuapp.com/auth/register", {
                method: "POST", 
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            let data1 = await res.json()
            console.log(data1)
            if(data1.message == "Registration failed, user already exists"){
                alert("User already exist. Please try to login with your credentials.")
            }

        } catch (error) {
            console.log(error)
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        getData()
    }

    const handleClick = () => {
        console.log(data)
    }

    return (
    <>

<div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "150px",
          width: "400px", 
          flexDirection:"column",
          marginLeft: "600px"
        }}
      >
        <div style={{ display: 'flex', justifyContent: "center", alignItems:"center", gap: "20px", marginBottom: "20px" }} >
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Y3QNhjNGdpNBRoCxZ6OEaHTyrwzwdahgtg&usqp=CAU" alt="Note app" width="100px" height="100px" />  
        <h1 className="h3 mb-3 fw-normal">Register</h1>
        </div>
        <form onSubmit={handleSubmit}>

          <div className="form-floating" >
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              value={name}
              name="name"
              onChange={handleChange}
              placeholder="Enter Name"
            />
            <label for="floatingInput">Name</label>
          </div>

          <div className="form-floating" >
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              value={email}
              name="email"
              onChange={handleChange}
              placeholder="Enter Email"
            />
            <label for="floatingInput">Email</label>
          </div>

          <div className="form-floating" >
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              value={username}
              name="username"
              onChange={handleChange}
              placeholder="Enter Username"
            />
            <label for="floatingInput">Username</label>
          </div>

          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>

          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingPassword"
              name="mobile"
              value={mobile}
              onChange={handleChange}
              placeholder="Mobile"
            />
            <label for="floatingPassword">Mobile</label>
          </div>

          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingPassword"
              name="description"
              value={description}
              onChange={handleChange}
              placeholder="Description"
            />
            <label for="floatingPassword">Description</label>
          </div>




          <button
            className="w-100 btn btn-lg btn-primary"
            type="submit"
            onClick={handleClick}
          >
            Sign Up
          </button>
        </form>

        Already have an account? Click on <Link to="/"> Login </Link>
      </div>

        
    </>
  )
}
