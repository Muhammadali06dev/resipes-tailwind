import "./Header.css"
import { NavLink } from "react-router-dom"

import React from 'react'

function Header() {
   return (
      <header className="bg-slate-800 py-3">
         <div className=" container lg px-5 mx-auto">
            <NavLink to="/" className="text-xl font-bold text-white pl-5" >DevCooking</NavLink>
         </div>
      </header>
   )
}

export default Header