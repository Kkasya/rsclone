import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';
import stylesCommon from '../../styles/stylesCommon';
import stylesNav from './stylesNav';

const pagesList = [
  'levels',
  'settings',
  'help',
  'team',
];

export default function Nav({ isNavbar }) {
  const commonStyles = stylesCommon();
  const useNavStyles = stylesNav();
  const buttonAndBig = `
    ${commonStyles.button}
    ${commonStyles.buttonBig}
    ${commonStyles.containerInlineCenter}
  `;
  const listInNavbar = `${useNavStyles.list} ${useNavStyles.listInNavbar}`;
  const listOnStart = `${useNavStyles.list} ${useNavStyles.listOnStart}`;

  const pagesListComponents = pagesList.map((item) => {
    return (
      <li key={item}>
        <NavLink to={`/${item}`} activeClassName='activeNavLink'>
          <Button
            variant='contained'
            className={isNavbar ? commonStyles.button : buttonAndBig}
          >
            {item}
          </Button>
        </NavLink>
      </li>
    );
  });

  return (
    <nav className={useNavStyles.nav}>
      <ul className={isNavbar ? listInNavbar : listOnStart}>
        {pagesListComponents}
      </ul>
    </nav>
  );
}
