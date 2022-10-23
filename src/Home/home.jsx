import React from 'react'
import "./home.css"
import Sidebar from "./sidebarcomponent/sidebar"
import Header from "./headercomponent/header"
import Hero from "./herocomponent/hero"
function Home() {
  return (
    <>
    <div id="home-page-container">
      <div id="sidebar"><Sidebar/></div>
      <div id="main-page-containe">
      <section><Header/></section>
      <section><Hero/></section>
      </div>
    </div>
    </>
  )
}

export default Home