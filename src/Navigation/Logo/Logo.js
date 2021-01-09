import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import constants from '../../common/styles/constants';

export default function Logo() {
  return (
    <NavLink to='/'>
      <img
        src={logo}
        alt='logo'
        width={constants.logoSizes}
        height={constants.logoSizes}
      />
    </NavLink>
  );
}
