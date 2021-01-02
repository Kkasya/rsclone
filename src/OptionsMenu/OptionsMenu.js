import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ButtonPrimary from '../common/ButtonPrimary';

const OPTION_TITLES = {
  'areEffectsOn': 'Sound effects',
  'isMusicOn': 'Music',
  'areTipsOn': 'Level tips',
}

export default function OptionsMenu({ stateOptions, setOption, isVisible, toggleVisibility }) {
  const changeOption = (event) => {
    const newOptions = stateOptions.slice();
    const index = newOptions.findIndex(item => item.id === event.target.name);
    newOptions[index].state = event.target.checked;

    setOption(() => [...newOptions]);
  };

  const optionItems = stateOptions.map((item) => {
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

  return (
    <FormGroup
      style={{
        margin: '0 auto',
        padding: '30px',
        width: '200px',
        minHeight: '200px',

        display: isVisible ? 'flex' : 'none',
        justifyContent: 'space-between',
        background: 'rgb(225, 225, 225)',
        borderRadius: '8px',
      }}>
      {optionItems}
      <ButtonPrimary
        content='Ok'
        action={() => toggleVisibility(!isVisible)}
      />
    </FormGroup>
  );
}
