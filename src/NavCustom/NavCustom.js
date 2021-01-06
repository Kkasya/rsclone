import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../common/styles/styles';

export default function NavCustom() {
  const commonStyles = styles();
  return (
    <nav>
      <ul className={commonStyles.navbar}>
        <li>
          <NavLink to='/levels'>Levels</NavLink>
        </li>
        <li>
          <NavLink to='/settings'>Settings</NavLink>
        </li>
        <li>
          <NavLink to='/help'>Help</NavLink>
        </li>
      </ul>
    </nav>
  );
}
