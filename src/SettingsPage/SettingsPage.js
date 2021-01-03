import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import SettingsItems from './SettingsItems';
import ToggleButtons from './ToggleButtons';
import ButtonPrimary from '../common/ButtonPrimary/ButtonPrimary';

export default function SettingsPage(props) {
  const {
    stateSettings,
    setSettings,
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
      <SettingsItems 
        stateSettings={stateSettings}
        setSettings={setSettings}
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
