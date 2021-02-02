import React from 'react';
import { NavLink } from 'react-router-dom';
import stylesCommon from '../../styles/stylesCommon';
import constants from '../../styles/constants';
const logo = `/assets/images/logo.png`;

export default function Logo() {
  const useStylesCommon = stylesCommon();
  return (
    <NavLink to='/' className={useStylesCommon.logoNav}>
      <img
        src='./assets/images/logo.png'
        alt='logo'
        height={constants.logoHeight}
      />
    </NavLink>
  );
}
