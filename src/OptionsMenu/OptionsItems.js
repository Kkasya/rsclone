import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const OPTION_TITLES = {
  'areEffectsOn': 'Sound effects',
  'isMusicOn': 'Music',
  'areTipsOn': 'Level tips',
}

export default function OptionsItems({ stateOptions, setOption}) {
  const changeOption = (event) => {
    const newOptions = stateOptions.slice();
    const index = newOptions.findIndex(item => item.id === event.target.name);
    newOptions[index].state = event.target.checked;

    setOption(() => [...newOptions]);
  };

  return stateOptions.map((item) => {
    return (
      <FormControlLabel
        key={item.id}
        control={
          <Checkbox
            checked={item.state}
            onChange={changeOption}
            name={item.id}
            color="primary"
          />
        }
        label={OPTION_TITLES[item.id]}
      />
    );
  });
}
