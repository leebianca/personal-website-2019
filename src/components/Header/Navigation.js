import React from "react";
import { NavLink } from 'react-router-dom'; 
import './Header.css';

const Navigation = () => {
  return (
    <div>
      <NavLink className='NavLink' to='/'>Home</NavLink>
      <NavLink className='NavLink' to='/about'>About</NavLink>
      <NavLink className='NavLink' to='/contact'>Contact</NavLink>
    </div>
  );
};

export default Navigation;