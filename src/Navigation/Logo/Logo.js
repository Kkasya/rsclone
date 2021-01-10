import React from 'react';
import { NavLink } from 'react-router-dom';
import stylesCommon from '../../common/styles/stylesCommon';
import constants from '../../common/styles/constants';
const logo = `${process.env.PUBLIC_URL}/assets/images/logo.png`;

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
