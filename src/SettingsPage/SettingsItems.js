import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { connect } from 'react-redux';
import { toggleSetting } from '../redux/actions';

const SETTINGS_TITLES = {
  'areEffectsOn': 'Sound effects',
  'isMusicOn': 'Music',
  'areTipsOn': 'Level tips',
}

function SettingsItems({ settings, toggleSetting }) {
  return settings.map((item) => {
    return (
      <FormControlLabel
        key={item.id}
        control={
          <Checkbox
            checked={item.state}
            onChange={toggleSetting}
            name={item.id}
            color="primary"
          />
        }
        label={SETTINGS_TITLES[item.id]}
      />
    );
  });
}

const mapStateToProps = (state) => ({
  settings: state.settings,
});

const mapDispatchToProps = {
  toggleSetting,
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsItems);
