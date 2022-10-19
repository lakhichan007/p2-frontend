import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login/Login';
import SignUp from './SignUP_component/signup';
import Home from "./Home/home"

function App() {

  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/home'  element={<Home/>}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
