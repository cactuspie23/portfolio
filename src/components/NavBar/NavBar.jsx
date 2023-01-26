import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'
import './NavBarStyles.css'


const NavBar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor)

  return (
    <div className={color ? 'nav nav-bg' : 'nav'}>
      <NavLink to='/'>
        <h1>Alyssa</h1>
      </NavLink>
      <ul className={click ? "nav-menu active" : "nav-menu"} id='ul' >
        <li onClick={handleClick}>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li onClick={handleClick}>
          <NavLink to='about'>About</NavLink>
        </li>
        <li onClick={handleClick}>
          <NavLink to='projects'>Projects</NavLink>
        </li>
        <li onClick={handleClick}>
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