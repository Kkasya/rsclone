import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import OptionsItems from './OptionsItems';
import ToggleButtons from './ToggleButtons';
import ButtonPrimary from '../../common/ButtonPrimary';

export default function OptionsMenu(props) {
  const {
    stateOptions,
    setOption,
    isVisible,
    toggleVisibility,
    stateLang,
    toggleLang,
  } = props;

  return (
    <FormGroup
      style={{
        margin: '0 auto',
        padding: '30px',
        width: '200px',
        minHeight: '300px',

        display: isVisible ? 'flex' : 'none',
        justifyContent: 'space-between',
        background: 'rgb(225, 225, 225)',
        borderRadius: '8px',
      }}
    >
      <OptionsItems 
        stateOptions={stateOptions}
        setOption={setOption}
      />

      <ToggleButtons
        stateLang={stateLang}
        toggleLang={toggleLang}
      />

      <ButtonPrimary
        content='Ok'
        action={() => toggleVisibility(!isVisible)}
      />
    </FormGroup>
  );
}
