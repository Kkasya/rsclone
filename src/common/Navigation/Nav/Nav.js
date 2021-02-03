import React from 'react';
import stylesNav from './stylesNav';
import { connect } from 'react-redux';
import NavElement from './components/NavElement'

const pagesList_EN = {
  levels: 'levels',
  settings: 'settings',
  help: 'help',
  team: 'team',
};

const pagesList_RU = {
  levels: 'уровни',
  settings: 'настройки',
  help: 'помощь',
  team: 'команда',
}

function Nav({ isNavbar, lang }) {
  const useNavStyles = stylesNav();

  return (
    <nav className={useNavStyles.nav}>
      <NavElement isNavbar={isNavbar} pageList={lang === 'en' ? pagesList_EN : pagesList_RU} />
    </nav>
  );
}

const mapStateToProps = (state) => ({
  lang: state.lang
});

export default connect(mapStateToProps)(Nav);