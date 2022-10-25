import "./login.css"
import React from "react";
import axios from "axios"
import { useState, } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const navigator = useNavigate()
    const [login, setlogin] = useState({})


    const oldUser = async () => {
        if (login.userEmail && login.password) {
            await axios.post("https://contct-manager-backend6.herokuapp.com/login", login)
                .then((res) => {
                    if (res.data.message ==="success") {
                        window.localStorage.setItem("token",res.data.token)
                        alert("signin Sucessull!")
                        navigator("/home")

                    }
                    if(res.data.message==="Unregistered"){
                        alert("User not Registered !")
                    }
                    if(res.data.message==="Invalid"){
                        alert("Invalid Crediential!")
                    }
                  
                
                })
                .catch(err => { console.log(err) })
        }
        else {
            alert("Input field shouldn't be Empty!")
        }

    }
    return (
            <div id="login-container">
                <section id="top-section">
                <div  className="image-box1">
                <img  src={require("./Ellipse-31.png")} alt=""/>
                </div>
                <div className="image-box2">
                 <img id="elp1" src={require("./Group-695.png")}  alt=""/>
                </div>
                </section>
                <section id="middle">
                <h1>Logo</h1>
                <p>Enter your credentials to access your account</p>
                <div>
                <input className="input" type="text" placeholder="User-Email" onChange={(e) => { setlogin({ ...login, userEmail: e.target.value }) }} name="userEmail" /> 
                </div>
                <div>
                <input className="input" type="password" placeholder="Password" onChange={(e) => { setlogin({ ...login, password: e.target.value }) }} name="password" />
                </div>
                <div>
                <button type="submit" onClick={oldUser}>Sign In</button>
                </div>
                <div>
                <a href="/signUp">sign up</a>
                </div>
                </section>
            <section id="bottom-section">
            <div id="elp2" className="image-box2"><img src={require("./Group-695.png")}  alt=""/></div>
            <div id="elp22" className="image-box1"><img  src={require("./Ellipse-32.png")} alt=""/></div>
            </section>
            </div>    
    )
}

export default Login