import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { SubtaskInput } from "./SubtaskInput";
import { SubtaskList } from "./SubtaskList";

export const Subtask = () => {
  const [data, setData] = React.useState([]);
  const [showAll, setShowAll] = React.useState(true);

  // get Data
  const getTodos = async() => {
    try {
      let res = await fetch(`https://notes-json-server-44.herokuapp.com/subtask`)
      let data = await res.json()
      setData(data)
    } catch (error) {
      console.log(error)
    }
  }

  React.useEffect(()=>{
    getTodos()
  },[])

  // post data 

  const handleAdd = async(title) => {
    const payload = {
      title : title,
      status: false,
      id: uuid(),
    };

    try {
      let res = await fetch(`https://notes-json-server-44.herokuapp.com/subtask`, {
        method: "POST", 
        body: JSON.stringify(payload),
        headers:{
          "content-type": "application/json"
        } 
      })
      let data = await res.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
    setData([...data, payload]);
  };


  // Delete data
  const handleDelete = async(id) => {
    // const Deleteitem = data.filter((todo) => todo.id !== id);
      try {
        await fetch(`https://notes-json-server-44.herokuapp.com/subtask/${id}`,{
          method: "DELETE", 
          headers: {
            "content-type": "application/json"
          }
        })
        getTodos()
        
      } catch (error) {
        console.log(error)
      }
  };


  const handleToggle = (id) => {
    const updateToDo = data.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    );
    setData(updateToDo);
  };

  return (
    <>
      <SubtaskInput handleAdd={handleAdd} />
      <SubtaskList
        data = {data}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
        showAll={showAll}      
      />
    </>
  );
};
