"use client"

import { useState} from "react";
import { useRouter } from 'next/navigation';

import Navbar from "../components/navbar";
import "@/src/app/recipe/recipe.css"

const Recipe: React.FC =()=>{

    let [searchQuery, setSearchQuery] = useState<string>("")
    const router = useRouter();

       let handleChnage = ()=> {
        router.push(`/recipe/${searchQuery}`) ;
       }

    return (
        <>
        <Navbar/>
        <div className="recipeParent">
        <h1 className="recipeHeading">🐱‍💻 SEARCH ANY RECIPE HERE 🐱‍💻</h1>
        <div className="searchInput">
        <input type="search" placeholder="recipe" onChange={(e) => setSearchQuery(e.target.value)} />
        <button  onClick={handleChnage} className="btn"> <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="34px" fill="black"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg></button>
        </div>
        

        </div>
        </>
    )
}

export default Recipe