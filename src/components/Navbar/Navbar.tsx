//section for utility imports
import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

//section for component imports


//section for reactFC
const navbar: React.FC = () => {
  
    return (

        <div className="nav">
                <NavLink className='navitem' to="/">1</NavLink>
                <NavLink className='navitem' to="/">2</NavLink>
                <NavLink className='navitem' to="/">3</NavLink>
                <NavLink className='navitem' to="/">T</NavLink>
        </div>
  
    )
}

export default navbar