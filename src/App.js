import './App.css';
import { Login } from './Components/Login';
import {Routes, Route} from "react-router-dom"; 
import {Signup} from "./Components/Signup";
import {Home} from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home /> } />
        <Route path="/Login" element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
