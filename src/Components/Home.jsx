import React from 'react'
import { Form } from './Form'
import { Sidebar } from './Sidebar'
import { Subtask } from './Subtask'


export const Home = () => {

    

  return (
    <>
    <h1>Home</h1>

    <div style={{ display: "flex", gap:"20px" }}>
        <div style={{ width: "400px", borderRight:"2px solid red" }} >
            <Sidebar /> 
        </div>

        <div style={{ width: "100%",   }} >
            <Form />
        </div>
    </div>




    </>
  )
}
