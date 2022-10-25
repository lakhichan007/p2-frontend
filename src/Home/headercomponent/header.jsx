import React, { useState ,useEffect } from "react";
import axios from "axios"
import "./header.css"
import Contacts from "../contacts/contact"
import Hero from "../herocomponent/hero";
let mytoken = window.localStorage.getItem("token")

const Header = ({setquerry}) => {
    
    return (
        <>
            <div id="header-container">
                <din>
                    <p id="contact-font">Total Contacts</p>
                </din>
                <din id="header-search-bar">
                    < i class="fa fa-search" aria-hidden="true" ></i>
                    <input id="search-bar" type="text" placeholder="Search by Email Id....." onChange={(e)=>setquerry(e.target.value)}/>
                </din>
                <din id="header-user-detail">
                    <img alt="" />
                    <p>John</p>
                </din>
            </div>
        </>
    )
}
export default Header