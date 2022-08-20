import React from 'react'
import { Sidebar } from './Sidebar'


export const Home = () => {

    

  return (
    <>
    <h1>Home</h1>

    <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)" }}>
        <div style={{ width: "400px", borderRight:"2px solid red" }} >
            <Sidebar /> 
        </div>

        <div style={{ width: "100%" }} >
            Left 
        </div>
    </div>




    </>
  )
}
