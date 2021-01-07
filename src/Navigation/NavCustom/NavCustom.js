import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../../common/styles/styles';
import Logo from '../Logo/Logo';
const classNames = require('classnames');

export default function NavCustom({ isOnStart, isMain }) {
  const commonStyles = styles();
  const navbarCombine = classNames(
    commonStyles.navbar,
    commonStyles.navbarOnStart,
  );

  if (isOnStart && !isMain) {
    return (
      <nav className={commonStyles.navbar}>
        <Logo />
      </nav>
    );
  }

  return (
    <nav className={isMain ? navbarCombine : commonStyles.navbar}>
      {!isMain && <Logo />}
      <ul>
        {
          !isMain &&
          <li>
            <NavLink to='/'>Start page</NavLink>
          </li>
        }
        <li>
          <NavLink to='/levels'>Levels</NavLink>
        </li>
        <li>
          <NavLink to='/settings'>Settings</NavLink>
        </li>
        <li>
          <NavLink to='/help'>Help</NavLink>
        </li>
        <li>
          <NavLink to='/team'>Team</NavLink>
        </li>
      </ul>
    </nav>
  );
}
