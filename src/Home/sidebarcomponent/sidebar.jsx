import React from "react";
import "./sidebar.css"
 const Sidebar=()=>{
    return(
        <>
        <div id="side-container">
        <h1 id="logo">Logo</h1>
        <i id="" class="fa fa-th-large" aria-hidden="true"></i>
        <p id="dashboard">Dashboard</p><br></br>
        
            
            <button id="all-contact-button">
            <i class="fa fa-address-card" aria-hidden="true"></i>
            <p id="total-contact">Total contacts |</p>
            </button>
            
        
        <a id="logout" href="./" >
            <button id="sb-btn" onClick={()=>{window.localStorage.removeItem("token")}}>
            <i class="fa fa-sign-in" aria-hidden="true"></i>
        <p id="logout-text">Log out</p>
            </button>
        </a>
        </div>
        </>
    )
 }
 export default Sidebar