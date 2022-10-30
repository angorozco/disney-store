import React from 'react';
import logo from '../../assets/logo.png';
import './navBar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <nav>
      <a href=""><img src={logo} alt="" className='logo'/></a>
      <ul>
        <li><a href="">Home</a></li>
        <li  className='sublist'><a href="">Productos</a>
          <ul  className='sublist-elements'>
              <li><a href="">Hombres</a></li>
              <li><a href="">Mujeres</a></li>
          </ul>
        </li>
        <li><a href=""> <CartWidget /> </a></li>
      </ul>
    </nav>
  )
}

export default NavBar