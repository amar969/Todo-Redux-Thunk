import React from "react";
import { Sidebar } from "./Sidebar";

export const Other = () => {
  let [otherTodoCount, setOtherTodoCount] = React.useState(0);
  let [otherInProgress, setInProgressCount] = React.useState(0);
  let [otherDone, setDoneCount] = React.useState(0);
  const [loading, setLoading] = React.useState(false);

  const getOther = async () => {
    setLoading(true)
    try {
      let res1 = await fetch(
        "https://notes-json-server-44.herokuapp.com/notes?todo_status=Todo&todo_tag=Other"
      );
      let data1 = await res1.json();
      console.log(data1.length);
      setOtherTodoCount(data1.length);
    } catch (error) {
      console.log(error);
    }

    try {
      let res2 = await fetch(
        "https://notes-json-server-44.herokuapp.com/notes?todo_status=In Progress&todo_tag=Other"
      );
      let data2 = await res2.json();
      console.log(data2.length);
      setInProgressCount(data2.length);
    } catch (error) {
      console.log(error);
    }

    try {
      let res3 = await fetch(
        "https://notes-json-server-44.herokuapp.com/notes?todo_status=Done&todo_tag=Other"
      );
      let data3 = await res3.json();
      console.log(data3.length);
      setDoneCount(data3.length);
    } catch (error) {
      console.log(error);
    }

    setLoading(false)
  };

  React.useEffect(() => {
    getOther();
  }, []);

  return (
    <>
    {loading ? 
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
            fontSize: "25px",
          }}
        >
             <h1 style={{ textAlign: "left", marginBottom:"50px"}} >Other</h1>
          <h3  >Summary</h3>
          <div
            style={{
              border: "2px solid black",
              padding: "10px",
              borderRadius: "10px",
              marginTop: "10px",
            }}
          >
            Todo - {otherTodoCount}
          </div>

          <div
            style={{
              border: "2px solid black",
              padding: "10px",
              borderRadius: "10px",
              marginTop: "10px",
            }}
          >
            In Progress - {otherInProgress}
          </div>

          <div
            style={{
              border: "2px solid black",
              padding: "10px",
              borderRadius: "10px",
              marginTop: "10px",
            }}
          >
            Done - {otherDone}
          </div>
        </div>
      </div>

      )
    }
      
    </>
  );
};