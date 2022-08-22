import React from 'react'
import "./Form.css"
import { Subtask } from './Subtask'

let initialState = {
    title: "", 
    description: "", 
    date: "", 
    todo_status: "", 
    todo_tag: "",
    subtask: ""
}

export const Form = () => {
  
    const [data, setData] = React.useState(initialState)
    const handleChange = (e) => {
        let {name, value, type} = e.target 
        value = type === "checked" ? name : value
        setData({...data, [name] : value})
    }

    let {title, description, date, todo_status, todo_tag, subtask} = data

    const getData = async() => {
        try {
            let res = await fetch("https://notes-json-server-44.herokuapp.com/notes",{
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                "Content-Type": "application/json",
            }
        })
        let data1 = await res.json()
        console.log(data1)
        alert("Task created")
            
        } catch (error) {
            console.log(error)    
        }
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleChange(e)
        getData()
    }
    
    const handleClick = () => {
        console.log(data)
    }

    
return (
    <>
    <form onSubmit={handleSubmit}>

        <div className='create_task_container'>
        <div className='inputbox_container'>
           <input type="text" class="form-control"  value={title} name="title" onChange={handleChange} placeholder="Enter title" /> 
            <textarea type="text" class="form-control"  value={description} name="description" onChange={handleChange} placeholder="Enter Description"/> 
        </div>

        <div>
            <Subtask /> 
        </div>
        
        <div className='inputbox_container'>
            <input type="date" value={date} class="form-control"  name="date" onChange={handleChange} ></input> 
            <button style={{ backgroundColor: "skyblue" }} type="submit" onClick={handleClick} >Create a task</button>
        </div>

        </div>

        {/* radio */}
        <div className='tags_conatiner'>
            <div><input type="radio" value="Todo" name="todo_status" onChange={handleChange} /> Todo</div>
            <div><input type="radio" value="In Progress" name="todo_status" onChange={handleChange}/> In Progress </div>
            <div><input type="radio" value="Done" name="todo_status" onChange={handleChange}/> Done</div>
        </div>

        {/* CheckBox */}
        <div className='tags_conatiner' >
            <h3>Tags</h3>
            <div><input type="checkbox" value="Offical" name="todo_tag" onChange={handleChange} /> Offical  </div>
            <div><input type="checkbox" value="Personal" name="todo_tag" onChange={handleChange}/> Personal </div>
            <div><input type="checkbox" value="Other" name="todo_tag" onChange={handleChange}/> Other</div>
        </div>
             
    </form>
   
        
    </>

  )
}