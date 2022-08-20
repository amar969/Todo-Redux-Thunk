import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Logout } from "../Redux/action";
import { Navigate } from 'react-router-dom';


export const Home = () => {

    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(Logout())
    }

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    console.log(isLoggedIn)
    if(isLoggedIn == false) return(<Navigate to ="/" />)

  return (
    <>
    <h1>Home</h1>
    <button className="btn btn-danger" onClick={handleLogout} >Logout</button>
    </>
  )
}
