import React from 'react';
import logo from '../../assets/logo.png';
import './navBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <NavLink to='/'><img src={logo} alt="" className='logo'/></NavLink>
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li  className='sublist'><NavLink to='/products'>Productos</NavLink>
          <ul  className='sublist-elements'>
              <li><NavLink to='/products/hombre'>Hombres</NavLink></li>
              <li><NavLink to='/products/mujer'>Mujeres</NavLink></li>
          </ul>
        </li>
        <li><NavLink to='/cart'> <CartWidget /> </NavLink></li>
      </ul>
    </nav>
  )
}

export default NavBar