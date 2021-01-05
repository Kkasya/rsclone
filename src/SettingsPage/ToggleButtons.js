import React from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { connect } from 'react-redux';
import { toggleLang } from '../redux/actions';

const LANGUAGES = [
  'en',
  'ru',
];

function ToggleButtons({ lang, toggleLang }) {
  const langButtons = LANGUAGES.map((lang) => (
    <ToggleButton
      value={lang}
      key={lang}
      color='primary'
    >
      {lang.toUpperCase()}
    </ToggleButton>
  ));

  return (
    <ToggleButtonGroup
      value={lang}
      exclusive
      onChange={toggleLang}
    >
      {langButtons}
    </ToggleButtonGroup>
  );
}

const mapStateToProps = (state) => ({
  lang: state.settings.lang,
});

const mapDispatchToProps = {
  toggleLang,
};

export default connect(mapStateToProps, mapDispatchToProps)(ToggleButtons);
