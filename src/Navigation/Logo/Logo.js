import React from 'react';
import { NavLink } from 'react-router-dom';
import stylesCommon from '../../common/styles/stylesCommon';
import constants from '../../common/styles/constants';

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
