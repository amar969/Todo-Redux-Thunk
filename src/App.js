import './App.css';
import { Login } from './Components/Login';
import {Routes, Route} from "react-router-dom"; 
import {Signup} from "./Components/Signup";
import {Home} from "./Components/Home";
import {Personal} from "./Components/Personal";
import {Offical} from "./Components/Offical";
import {Other} from "./Components/Other";
import {Summary} from "./Components/Summary";
import { EditTask } from './Components/EditTask';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home /> } />
        <Route path="/Login" element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path="/Summary/All" element={<Summary />} />
        <Route path="/Summary/Personal" element={<Personal /> } />
        <Route path="/Summary/Other" element={<Other />} />
        <Route path="/Summary/Offical" element={<Offical />} />
        <Route path="/EditTask:id" element={<EditTask />} /> 
      </Routes>
    </div>
  );
}

export default App;
