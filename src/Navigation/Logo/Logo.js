import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import stylesCommon from '../../common/styles/stylesCommon';
import constants from '../../common/styles/constants';

export default function Logo() {
  const useStylesCommon = stylesCommon();
  return (
    <NavLink to='/' className={useStylesCommon.logoNav}>
      <img
        src={logo}
        alt='logo'
        height={constants.logoHeight}
      />
    </NavLink>
  );
}
