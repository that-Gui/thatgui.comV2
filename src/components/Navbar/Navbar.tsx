//section for utility imports
import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

//section for component imports
import { FaCode } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";


//section for reactFC
const navbar: React.FC = () => {
  
    return (

        <div className="nav">
                <NavLink className={({ isActive }) => isActive ? "navitem actnav" : "navitem"} to="/"><div className='heropunch'></div></NavLink>
                <NavLink className={({ isActive }) => isActive ? "navitem actnav" : "navitem"} to="/work"><FaCode /></NavLink>
                <NavLink className={({ isActive }) => isActive ? "navitem actnav" : "navitem"} to="/contact"><FaEnvelope /></NavLink>
                {/* <>theme toggle</> */}
        </div>
  
    )
}

export default navbar