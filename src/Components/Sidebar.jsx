import { useDispatch, useSelector } from 'react-redux'
import { Logout } from "../Redux/action";
import { Navigate } from 'react-router-dom';
import React from 'react'

export const Sidebar = () => {
    const dispatch = useDispatch()
    
    const handleLogout = () => {
        dispatch(Logout())
    }

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    console.log(isLoggedIn)
    if(isLoggedIn == false) return(<Navigate to ="/Login" />)



    return (
        <>
        <button className="btn btn-danger" onClick={handleLogout} >Logout</button>
        </>

  )
}
