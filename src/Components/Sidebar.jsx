import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../Redux/action";
import { Navigate, Link } from "react-router-dom";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const [profile, setProfile] = React.useState("");
  const [all, setAll] = React.useState(0);
  const [personal, setPersonal] = React.useState(0);
  const [offical, setOffical] = React.useState(0);
  const [other, setOther] = React.useState(0);

  const handleLogout = () => {
    dispatch(Logout());
  };

  const API_URL = "https://masai-api-mocker.herokuapp.com/";
  const getProfile = async () => {
    try {
      let username = JSON.parse(localStorage.getItem("username"));
      let userToken = JSON.parse(localStorage.getItem("user"));
      console.log(userToken.token);
      let res = await fetch(API_URL + "user/" + username, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + userToken.token,
        },
      });
      let data = await res.json();
      console.log(data);
      setProfile(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPersonal = async () => {
    try {
      let all = await fetch(
        "https://notes-json-server-44.herokuapp.com/notes"
      );
      let dataAll = await all.json();
      setAll(dataAll.length);

      let personal = await fetch(
        "https://notes-json-server-44.herokuapp.com/notes?todo_tag=Personal"
      );
      let dataPersonal = await personal.json();
      setPersonal(dataPersonal.length);

      let offical = await fetch(
        "https://notes-json-server-44.herokuapp.com/notes?todo_tag=Offical"
      );
      let dataOffical = await offical.json();
      setOffical(dataOffical.length);

      let other = await fetch(
        "https://notes-json-server-44.herokuapp.com/notes?todo_tag=Other"
      );
      let dataOther = await other.json();
      setOther(dataOther.length);

    } catch (error) {
      console.log(error);
    }
  };



  React.useEffect(() => {
    getProfile();
    getPersonal();
  }, []);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn);
  if (isLoggedIn == false) return <Navigate to="/Login" />;

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "760px",
          padding: "30px",
        }}
      >
        <div>
          <h3>Username - {profile.username}</h3>
          <p>Full Name - {profile.name}</p>
          <p>Email - {profile.email}</p>
          <p>Mobile - {profile.mobile}</p>
          <p>Info - {profile.description}</p>
        </div>

        <div style={{ marginTop: "50px" }} >
          <div
            style={{
              backgroundColor: "skyblue",
              color: "white",
              fontWeight: "bold",
              padding: "10px",
              marginBottom: "5px",
            }}
          >
              <Link to="/Summary/All" style={{color: "white", fontWeight:"bold", textDecoration:"none"  }} >
              <div style={{ display: "flex", justifyContent: "space-around", }} >
                  <div>All</div>
                  <div>{all}</div>
              </div>
              </Link>
          </div>
          <div
            style={{
              backgroundColor: "Green",
              color: "white",
              fontWeight: "bold",
              padding: "10px",
              marginBottom: "5px",
            }}
          >
             <Link to="/Summary/Personal" style={{ color: "white", fontWeight:"bold", textDecoration:"none" }}>
            <div style={{ display: "flex", justifyContent: "space-around", }} >
                  <div>Personal</div>
                  <div>{personal}</div>
              </div>
            </Link> 
          </div>
          <div
            style={{
              backgroundColor: "purple",
              color: "white",
              fontWeight: "bold",
              padding: "10px",
              marginBottom: "5px",
            }}
          >
            <Link to="/Summary/Offical" style={{color: "white", fontWeight:"bold", textDecoration:"none"  }} >
            <div style={{ display: "flex", justifyContent: "space-around", }} >
                  <div>Offical</div>
                  <div>{offical}</div>
              </div>
            </Link>
          </div>
          <div
            style={{
              backgroundColor: "orange",
              color: "white",
              fontWeight: "bold",
              padding: "10px",
              marginBottom: "5px",
            }}
          >
            <Link to="/Summary/Other" style={{color: "white", fontWeight:"bold", textDecoration:"none"  }}>
            <div style={{ display: "flex", justifyContent: "space-around", }} >
                  <div>Other</div>
                  <div>{other}</div>
              </div>
            </Link>
          </div>
        </div>
    
        <button
          className="btn btn-danger"
          onClick={handleLogout}
          style={{ fontWeight: "bold", marginTop:"200px" }}
        >
          Logout
        </button>
        
      </div>
    </>
  );
};
