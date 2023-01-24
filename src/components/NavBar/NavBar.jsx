import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'
import './NavBarStyles.css'


const NavBar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  return (
    <div className="nav">
      <NavLink to='/'>
        <h1>Alyssa</h1>
      </NavLink>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='about'>About</NavLink>
        </li>
        <li>
          <NavLink to='projects'>Projects</NavLink>
        </li>
        <li>
          <NavLink to='contact'>Contact</NavLink>
        </li>
      </ul>
      <div className="hambgr" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{color: '#8ecca9'}} />
        ) : (
          <FaBars size={20} style={{color: '#8ecca9'}} />
        )}
      </div>
    </div>
  )
}

export default NavBar