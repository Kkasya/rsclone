import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Logo from '../Logo/Logo';
import stylesCommon from '../../common/styles/stylesCommon';
import stylesNavCustom from './stylesNavCustom';
import stylesStartPage from '../../Pages/StartPage/stylesStartPage';

const pagesList = [
  'levels',
  'settings',
  'help',
  'team',
];

export default function NavCustom({ isOnStart, isMain }) {
  const commonStyles = stylesCommon();
  const useStylesNavCustom = stylesNavCustom();
  const useStylesStartPage = stylesStartPage();
  const navbarCombine = `${useStylesNavCustom.navbar} ${useStylesStartPage.navbarOnStart}`;
  const buttonAndBig = `${commonStyles.button} ${commonStyles.buttonBig}`;

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
            variant='contained'
            className={isMain ? buttonAndBig : commonStyles.button}
          >
            {item}
          </Button>
        </NavLink>
      </li>
    );
  });

  return (
    <nav className={isMain ? navbarCombine : useStylesNavCustom.navbar}>
      {!isMain && <Logo />}
      <ul>
        {pagesListComponents}
      </ul>
    </nav>
  );
}
