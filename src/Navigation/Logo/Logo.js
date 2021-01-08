import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.png';
import constants from '../../common/styles/constants';

export default function StartPage() {
  return (
    <NavLink to='/'>
      <img
        src={logo}
        alt='logo.png'
        width={constants.logoSizes}
        height={constants.logoSizes}
      />
    </NavLink>
  );
}
