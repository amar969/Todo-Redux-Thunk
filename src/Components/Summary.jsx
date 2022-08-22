import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Sidebar } from "./Sidebar";
import { useNavigate } from "react-router-dom";

export const Summary = () => {
  let navigate = useNavigate()
  const [todosData, setTodosData] = React.useState([]);
  const [inProgress, setInProgress] = React.useState([]);
  const [done, setDone] = React.useState([])
  const [loading, setLoading] = React.useState(false)

  const getTodosData = async() => {
    setLoading(true)
    try {
        let res = await fetch("https://notes-json-server-44.herokuapp.com/notes/?_embed=subtask&todo_status=Todo")
        let data = await res.json()
        console.log(data)
        setTodosData(data)
    } catch (error) {
        console.log(error)        
    }
    setLoading(false)
  }

  const getInProgressData = async() => {
    setLoading(true)
    try {
        let res = await fetch("https://notes-json-server-44.herokuapp.com/notes/?_embed=subtask&todo_status=In Progress")
        let data = await res.json()
        console.log(data)
        setInProgress(data)

    } catch (error) {
        console.log(error)        
    }
    setLoading(false)
  }

  const getDoneData = async() => {
    setLoading(true)  
    try {
        let res = await fetch("https://notes-json-server-44.herokuapp.com/notes/?_embed=subtask&todo_status=Done")
        let data = await res.json()
        console.log(data)
        setDone(data)
      } catch (error) {
          console.log(error)
      }
    setLoading(false)
  }

  React.useEffect(() => {
    getTodosData()
    getInProgressData()
    getDoneData()
  }, [])

  return (

    <>

    { loading ? 
        <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      : 

      (
        <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "20px",
          marginTop: "50px"
        }}
      >
        <div
          style={{
            width: "400px",
            borderRight: "2px solid red",
            height: "800px",
          }}
        >
          <Sidebar />
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            marginTop: "50px",
            marginLeft: "50px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "20px",
              width: "95%",
            }}
          >
            <div style={{ border: "2px solid black", borderTop: "none" }}>
              <div
                style={{
                  border: "3px solid black",
                  backgroundColor: "#54BAB9",
                  color: "white",
                  fontWeight: "bold",
                  padding: "10px",
                }}
              >
                TODO
              </div>
              <div style={{ overflow: "scroll", height: "600px" }}>
                {todosData.map((item) => {
                  return (
                    <>
                      <div
                        style={{
                          border: "1px solid black",
                          margin: "10px",
                          padding: "20px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                        }}
                        onClick={ () => {
                            navigate(`../EditTask:${item.id}`)
                        }}
                      >
                        <h3>{item.title}</h3>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            margin: "10px 0",
                          }}
                        >
                          <div
                            style={{
                              padding: "3px 5px",
                              borderRadius: "15px",
                              fontSize: "13px",
                              fontWeight: "bold",
                              backgroundColor: "#99A799",
                              color: "white",
                            }}
                          >
                            {item.todo_tag}
                          </div>
                          <div>{item.date}</div>
                        </div>
                        <p style={{ margin: "10px 0", textAlign: "left" }}>
                          {item.description}
                        </p>
                        <div style={{ display: "flex", flexDirection: "column" }} >
                          {item.subtask.map((item) => {
                              return(
                                  <>
                                  <div><input type="checkbox" value={item.status}/> {item.title} </div>
                                  </>
                              )
                          })}
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>

            <div style={{ border: "2px solid black", borderTop: "none" }}>
              <div
                style={{
                  border: "3px solid black",
                  backgroundColor: "#F29191",
                  color: "white",
                  fontWeight: "bold",
                  padding: "10px",
                }}
                
              >
                IN PROGRESS
              </div>
              <div style={{ overflow: "scroll", height: "600px" }}>
                {inProgress.map((item) => {
                  return (
                    <>
                      <div
                        style={{
                          border: "1px solid black",
                          margin: "10px",
                          padding: "20px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                        }}

                        onClick={ () => {
                            navigate(`../EditTask:${item.id}`)
                        }}
                      >
                        <h3>{item.title}</h3>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            margin: "10px 0",
                          }}
                        >
                          <div
                            style={{
                              padding: "3px 5px",
                              borderRadius: "15px",
                              fontSize: "13px",
                              fontWeight: "bold",
                              backgroundColor: "#99A799",
                              color: "white",
                            }}
                          >
                            {item.todo_tag}
                          </div>
                          <div>{item.date}</div>
                        </div>
                        <p style={{ margin: "10px 0", textAlign: "left" }}>
                          {item.description}
                        </p>
                        <div style={{ display: "flex", flexDirection: "column" }} >
                          {item.subtask.map((item) => {
                              return(
                                  <>
                                  <div><input type="checkbox" value={item.status}/> {item.title} </div>
                                  </>
                              )
                          })}
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>

            
            <div style={{ border: "2px solid black", borderTop: "none" }}>
              <div
                style={{
                  border: "3px solid black",
                  backgroundColor: "#726A95",
                  color: "white",
                  fontWeight: "bold",
                  padding: "10px",
                }}
              >
                DONE
              </div>
              <div style={{ overflow: "scroll", height: "600px" }}>
                {done.map((item) => {
                  return (
                    <>
                      <div
                        style={{
                          border: "1px solid black",
                          margin: "10px",
                          padding: "20px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                        }}

                        onClick={ () => {
                            navigate(`../EditTask:${item.id}`)
                        }}
                      >
                        <h3>{item.title}</h3>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            margin: "10px 0",
                          }}
                        >
                          <div
                            style={{
                              padding: "3px 5px",
                              borderRadius: "15px",
                              fontSize: "13px",
                              fontWeight: "bold",
                              backgroundColor: "#99A799",
                              color: "white",
                            }}
                          >
                            {item.todo_tag}
                          </div>
                          <div>{item.date}</div>
                        </div>
                        <p style={{ margin: "10px 0", textAlign: "left" }}>
                          {item.description}
                        </p>
                        <div style={{ display: "flex", flexDirection: "column" }} >
                          {item.subtask.map((item) => {
                              return(
                                  <>
                                  <div><input type="checkbox" value={item.status}/> {item.title} </div>
                                  </>
                              )
                          })}
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>

            

          </div>
        </div>
      </div>
      )



    }

      
    </>
  );
};
