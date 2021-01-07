import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';
import styles from '../../common/styles/styles';
import Logo from '../Logo/Logo';
const classNames = require('classnames');

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
  const buttonAndSmall = classNames(
    commonStyles.button,
    commonStyles.buttonSmall,
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
            <NavLink to='/'>
              <Button
                variant="contained"
                className={buttonAndSmall}
              >
                Start page
              </Button>
            </NavLink>
          </li>
        }
        <li>
          <NavLink to='/levels'>
            <Button
              variant="contained"
              className={isMain ? buttonAndBig : buttonAndSmall}
            >
              Levels
            </Button>
          </NavLink>
        </li>
        <li>
          <NavLink to='/settings'>
            <Button
              variant="contained"
              className={isMain ? buttonAndBig : buttonAndSmall}
            >
              Settings
            </Button>
          </NavLink>
        </li>
        <li>
          <NavLink to='/help'>
            <Button
              variant="contained"
              className={isMain ? buttonAndBig : buttonAndSmall}
            >
              Help
            </Button>
          </NavLink>
        </li>
        <li>
          <NavLink to='/team'>
            <Button
              variant="contained"
              className={isMain ? buttonAndBig : buttonAndSmall}
            >
              Team
            </Button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
