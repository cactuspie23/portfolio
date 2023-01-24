import { NavLink } from 'react-router-dom'
import './NavBar.module.css'


const NavBar = () => {
  return (
    <div className='nav'>
      <NavLink to='/'>
        <h1>Alyssa</h1>
      </NavLink>
      <ul>
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
    </div>
  )
}

export default NavBar