import React from 'react';
import { FormControlLabel, Checkbox } from '@material-ui/core';
import { connect } from 'react-redux';
import { toggleSetting } from '../../../redux/actions';
import stylesSettingsPage from '../stylesSettingsPage';

const SETTINGS_TITLES_RU = {
  'areEffectsOn': 'Sound effects',
  'isMusicOn': 'Music',
  'areTipsOn': 'Level tips',
};

const SETTINGS_TITLES_EN = {
  'areEffectsOn': 'Звуковые эффекты',
  'isMusicOn': 'Музыка',
  'areTipsOn': 'Советы к уровням',
}

function SettingsItems({ settings, lang, toggleSetting }) {
  const useStyles = stylesSettingsPage();
  return settings.map((item) => {
    return (
      <FormControlLabel  className={useStyles.itemCheckboxes}
        key={item.id}
        control={
          <Checkbox
            checked={item.state}
            onChange={toggleSetting}
            name={item.id}
            color='primary'
          />
        }
        label={lang === 'en' ? SETTINGS_TITLES_RU[item.id] : SETTINGS_TITLES_EN[item.id]}
      />
    );
  });
}

const mapStateToProps = (state) => ({
  settings: state.settings,
  lang: state.lang
});

const mapDispatchToProps = {
  toggleSetting
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsItems);
