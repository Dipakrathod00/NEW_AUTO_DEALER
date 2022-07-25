import logo from './logo.svg';

import './App.css';
import {BrowserRouter , Routes , Route} from "react-router-dom"

import User from './Components/AddProduct';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Logout from './Components/Logout';

import Home from './Components/Home';
import Register from './Components/Register';
import Profile from './Components/Profile';

function App() {
  return (
<BrowserRouter>
    <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/add-product"  element={<User/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/logout"  element={<Logout/>}/>
      <Route path="/profile"  element={<Profile/>}/>
      </Routes>
    </BrowserRouter>

   

  );
}

export default App;
