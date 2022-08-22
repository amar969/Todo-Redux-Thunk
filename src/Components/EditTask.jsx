import React from 'react'
import { useParams } from 'react-router-dom'

export const EditTask = () => {
    let {id} = useParams()
    const [data, setData] = React.useState([])
   
    const getTasks = async () => {
        try {
            let res = await fetch(`https://notes-json-server-44.herokuapp.com/notes/${id[1]}`)
            let data = await res.json()
            console.log(data)
            setData(data)
        } catch (error) {
            console.log(error)
        }
    } 

    React.useEffect(() => {
        getTasks()
    }, [])
    
    const {date, title, description, todo_status, todo_tag} = data

    const handleChange = (e) => {
        let {name, value, type} = e.target 
        value = type === "checked" ? name : value
        setData({...data, [name] : value})
    }
    
    const handleClick = () => {
        console.log(data)
    }

    const submitData = async() => {

        let res = await fetch(`https://notes-json-server-44.herokuapp.com/notes/${id[1]}`, {
            method: "PUT", 
            body: JSON.stringify(data),
            headers: {
                "Content-Type" : "application/json"
            }
        })
        let data2 = await res.json()
        console.log(data2)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        submitData()
    }

    return (

    <div>
        Edit Task - {id}

        <form onSubmit={handleSubmit} >
        <div>
            <input type="text" name="title" value={title} onChange={handleChange}  />
            <textarea name="description" value={description} cols="30" rows="10" onChange={handleChange} ></textarea>
            <input type="date" name="date" value={date} onChange={handleChange} />
            <div className='tags_conatiner'>
                <div><input type="radio" value="Todo" name="todo_status" onChange={handleChange} /> Todo</div>
                <div><input type="radio" value="In Progress" name="todo_status" onChange={handleChange} /> In Progress </div>
                <div><input type="radio" value="Done" name="todo_status" onChange={handleChange} /> Done</div>
            </div>

        <div className='tags_conatiner' >
            <h3>Tags</h3>
            <div><input type="checkbox" value="Offical" name="todo_tag" onChange={handleChange} /> Offical  </div>
            <div><input type="checkbox" value="Personal" name="todo_tag" onChange={handleChange} /> Personal </div>
            <div><input type="checkbox" value="Other" name="todo_tag" onChange={handleChange} /> Other</div>
        </div>

            <button onClick={handleClick} > Update Task </button>

        </div>
        </form>


    </div>
  )
}
