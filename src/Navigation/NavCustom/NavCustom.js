import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';
import styles from '../../common/styles/styles';
import Logo from '../Logo/Logo';
const classNames = require('classnames');

const pagesList = [
  'levels',
  'settings',
  'help',
  'team',
];

export default function NavCustom({ isOnStart, isMain }) {
  const commonStyles = styles();
  const navbarCombine = classNames(
    commonStyles.navbar,
    commonStyles.navbarOnStart,
  );
  const buttonAndBig = classNames(
    commonStyles.button,
    commonStyles.buttonBig,
  );

  if (isOnStart && !isMain) {
    return (
      <nav className={commonStyles.navbar}>
        <Logo />
      </nav>
    );
  }

  const pagesListComponents = pagesList.map((item) => {
    return (
      <li key={item}>
        <NavLink to={`/${item}`} activeClassName='activeNavLink'>
          <Button
            variant="contained"
            className={isMain ? buttonAndBig : commonStyles.button}
          >
            {item}
          </Button>
        </NavLink>
      </li>
    );
  });

  return (
    <nav className={isMain ? navbarCombine : commonStyles.navbar}>
      {!isMain && <Logo />}
      <ul>
        {pagesListComponents}
      </ul>
    </nav>
  );
}
