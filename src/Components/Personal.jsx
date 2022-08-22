import React from "react";
import { Sidebar } from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getPersonalCount } from "../Redux/action";

export const Personal = () => {
  let dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPersonalCount());
  }, []);

  let personalTodoCount = useSelector((state) => state.todoPersonalCount)
  console.log(personalTodoCount)

  let personalInProgress = useSelector((state) => state.inProgressPersonalCount)
  console.log(personalInProgress)

  let personalDone = useSelector((state) => state.donePersonalCount)
  console.log(personalDone)

  return (
    <>
      <div
        style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
        }}
        >
        <div
          style={{
              width: "30%",
              borderRight: "2px solid black",
              height: "800px",
            }}
            >
          <Sidebar />
        </div>

        <div
          style={{
              width: "70%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems:"flex-start",
              marginTop:"50px",
              marginLeft: "50px",
              fontSize:"25px"
            }}
            >
            <h1  style={{ textAlign: "left", marginBottom:"50px"}} >Personal</h1>
        <h3>Summary</h3>
          <div style={{ border:"2px solid black", padding: "10px", borderRadius:"10px", marginTop:"10px" }} >Todo - {personalTodoCount}</div>

          <div style={{ border:"2px solid black", padding: "10px", borderRadius:"10px", marginTop:"10px" }} >In Progress - {personalInProgress}</div>

          <div style={{ border:"2px solid black", padding: "10px", borderRadius:"10px", marginTop:"10px" }}  >Done - {personalDone}</div>
        </div>
      </div>

    </>
  );
};