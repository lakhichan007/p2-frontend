import React from "react";
import "./header.css"
let mytoken = window.localStorage.getItem("token")
const Header = () => {
    return (
        <>
            <div id="header-container">
                <din>
                    <p id="contact-font">Total Contacts</p>
                </din>
                <din id="header-search-bar">
                    < i class="fa fa-search" aria-hidden="true" ></i>
                    <input id="search-bar" type="text" placeholder="Search by Email Id....." />
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