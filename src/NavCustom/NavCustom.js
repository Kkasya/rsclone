import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from '@material-ui/core';
import styles from '../common/styles/styles';
const classNames = require('classnames');

export default function NavCustom() {
  const commonStyles = styles();
  const header = classNames(
    commonStyles.container,
    commonStyles.containerHeader,
  );

  return (
    <Container
      maxWidth="lg"
      className={header}
    >
      <nav>
        <ul className={commonStyles.navbar}>
          <li>
            <NavLink to='/'>Start page</NavLink>
          </li>
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
    </Container>
  );
}
