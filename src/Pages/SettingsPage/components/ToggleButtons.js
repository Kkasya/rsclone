import React from 'react';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';
import { connect } from 'react-redux';
import { toggleLang } from '../../../redux/actions';

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
  lang: state.lang,
});

const mapDispatchToProps = {
  toggleLang,
};

export default connect(mapStateToProps, mapDispatchToProps)(ToggleButtons);
