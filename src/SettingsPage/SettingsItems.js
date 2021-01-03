import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const SETTINGS_TITLES = {
  'areEffectsOn': 'Sound effects',
  'isMusicOn': 'Music',
  'areTipsOn': 'Level tips',
}

export default function SettingsItems({ stateSettings, setSettings }) {
  const changeSettings = (event) => {
    const newSettings = stateSettings.slice();
    const index = newSettings.findIndex(item => item.id === event.target.name);
    newSettings[index].state = event.target.checked;

    setSettings(() => [...newSettings]);
  };

  return stateSettings.map((item) => {
    return (
      <FormControlLabel
        key={item.id}
        control={
          <Checkbox
            checked={item.state}
            onChange={changeSettings}
            name={item.id}
            color="primary"
          />
        }
        label={SETTINGS_TITLES[item.id]}
      />
    );
  });
}
