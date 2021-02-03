import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';
import stylesCommon from '../../../styles/stylesCommon';
import stylesNav from '../stylesNav';

export default function NavElement(props) {
  const useNavStyles = stylesNav();
  const commonStyles = stylesCommon();
  const buttonAndBig = `
    ${commonStyles.button}
    ${commonStyles.buttonBig}
    ${commonStyles.containerInlineCenter}
  `;

  const listInNavbar = `${useNavStyles.list} ${useNavStyles.listInNavbar}`;
  const listOnStart = `${useNavStyles.list} ${useNavStyles.listOnStart}`;

  const isShowBySetting = props.settings[0].state;
  const srcPressMenu = `/assets/sounds/press1.mp3`;
  const audioPressMenu = new Audio(srcPressMenu);
  const playPress = () => {
    if (isShowBySetting) {
      audioPressMenu.play();
    }
  }

  const navElements =
    Object.entries(props.pageList).map(([routPath, valueBtn]) => {
      return (
        <li key={routPath}>
          <NavLink to={`/${routPath}`} activeClassName='activeNavLink'>
            <Button
              variant='contained'
              className={props.isNavbar ? commonStyles.button : buttonAndBig}
              onClick={playPress}
            >
              {valueBtn}
            </Button>
          </NavLink>
        </li>
      )
    });

  return (
    <ul className={props.isNavbar ? listInNavbar : listOnStart}>
      {navElements}
    </ul>
  )
}