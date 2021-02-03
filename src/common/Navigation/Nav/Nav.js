import React from 'react';
import stylesNav from './stylesNav';
import { connect } from 'react-redux';
import NavElement from './components/NavElement'
import { toggleSetting, toggleLang } from '../../../redux/actions';

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

function Nav({ isNavbar, settings, lang }) {
  const useNavStyles = stylesNav();

  return (
    <nav className={useNavStyles.nav}>
      <NavElement isNavbar={isNavbar} pageList={lang === 'en' ? pagesList_EN : pagesList_RU} settings={settings} />
    </nav>
  );
}

const mapStateToProps = (state) => ({
  lang: state.lang,
  settings: state.settings,
});

const mapDispatchToProps = {
  toggleSetting,
  toggleLang
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);