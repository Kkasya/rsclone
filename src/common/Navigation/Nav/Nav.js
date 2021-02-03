import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';
import stylesCommon from '../../styles/stylesCommon';
import stylesNav from './stylesNav';
import { toggleSetting } from '../../../redux/actions';
import { connect } from 'react-redux';

const pagesList = [
  'levels',
  'settings',
  'help',
  'team',
];

function Nav({ isNavbar, settings }) {
  const commonStyles = stylesCommon();
  const useNavStyles = stylesNav();
  const buttonAndBig = `
    ${commonStyles.button}
    ${commonStyles.buttonBig}
    ${commonStyles.containerInlineCenter}
  `;
  const listInNavbar = `${useNavStyles.list} ${useNavStyles.listInNavbar}`;
  const listOnStart = `${useNavStyles.list} ${useNavStyles.listOnStart}`;

  const isShowBySetting = settings[1].state;
  const srcPressMenu = `${process.env.PUBLIC_URL}/assets/sounds/press1.mp3`;
  const audioPressMenu = new Audio(srcPressMenu);
  const playPress  = () => {
    if (isShowBySetting) {
      audioPressMenu.play();
    }
  }

  const pagesListComponents = pagesList.map((item) => {
    return (
      <li key={item}>
        <NavLink to={`/${item}`} activeClassName='activeNavLink'>
          <Button
            variant='contained'
            className={isNavbar ? commonStyles.button : buttonAndBig}
            onClick={playPress}
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

const mapStateToProps = (state) => ({
  settings: state.settings,
});

const mapDispatchToProps = {
  toggleSetting,
};
export default connect(mapStateToProps, mapDispatchToProps)(Nav);