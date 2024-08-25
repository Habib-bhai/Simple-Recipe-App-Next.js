"use client"

import { useState } from "react"
import SideBar from "./sideBar"


export default function Navbar(){
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

    return <>
    <div className="nav">
      <div className="logo"></div>
    <h2>BROS RECIPES</h2>
    <ul className="list">
        <a href="/" className="navAnchors hideOnMobile"><li>HOME</li></a>
        <a href="/aboutus" className="navAnchors hideOnMobile"><li>ABOUT</li></a>
        <a href="/recipe" className="navAnchors hideOnMobile"><li>RECIPE</li></a>
    </ul>
    <button className="sideBarToggler" onClick={toggleSidebar} style={{ fontSize: '2rem' }}>
        ☰
      </button>
      <SideBar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </div>
   
    </>
}