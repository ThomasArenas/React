import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='nav'>
      <NavLink className='nav__link' to='/'>
        <h1>ESTIAM - Pokédex</h1>
      </NavLink>
      <NavLink className='nav__link' to='/create'>
        <h5>Création</h5>
      </NavLink>
    </nav>
  );
};

export default Header;