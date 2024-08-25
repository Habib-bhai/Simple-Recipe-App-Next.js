"use client"
import "@/src/app/main.css"
import Link from "next/link"
import Style from "@/src/app/components/sideBar.module.css"


export default function SideBar({ isOpen, toggleSidebar }: {isOpen: boolean, toggleSidebar: ()=> void }) {



    return <div className={`${Style.sidebar} ${isOpen ? Style.open : ''}`}>
    <button className={Style.closeButton} onClick={toggleSidebar}>X</button>
    <nav>
        <ul className={Style.navList}>
          <li className={Style.navItem}><a href="/" className={Style.navLink}>Home</a></li>
          <li className={Style.navItem}><a href="/aboutus" className={Style.navLink}>About</a></li>
          <li className={Style.navItem}><a href="/recipe" className={Style.navLink}>Recipe</a></li>
        
        </ul>
      </nav>
  </div>
}