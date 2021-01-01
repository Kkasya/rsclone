import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ButtonPrimary from '../common/ButtonPrimary';

export default function OptionsMenu() {
  const [state, setState] = React.useState({
    isEffectsOn: {
      name: 'Sound effects',
      state: true,
    },
    isMusicOn: {
      name: 'Music',
      state: true,
    },
    isTipsOn: {
      name: 'Level tips',
      state: true,
    },
  });

  const handleChange = (event) => {
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: {
        ...prevState[event.target.name],
        state: event.target.checked,
      }
    }));
  };

  const optionItems = [];
  for (const [key, value] of Object.entries(state)) {
    optionItems.push(
      <FormControlLabel
        key={key}
        control={
          <Checkbox
            checked={value.state}
            onChange={handleChange}
            name={key}
            color="primary"
          />
        }
        label={value.name}
      />
    )
  }

  return (
    <FormGroup>
      {optionItems}
      <ButtonPrimary content='Ok' />
    </FormGroup>
  );
}
