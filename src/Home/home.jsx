import React, { useState } from 'react'
import "./home.css"
import Sidebar from "./sidebarcomponent/sidebar"
import Header from "./headercomponent/header"
import Hero from "./herocomponent/hero"
function Home() {
  const [querry,setquerry]=useState("")
  return (
    <>
    <div id="home-page-container">
      <div id="sidebar"><Sidebar/></div>
      <div id="main-page-containe">
      <section><Header setquerry={setquerry}/></section>
      <section><Hero querry={querry}/></section>
      </div>
    </div>
    </>
  )
}

export default Home