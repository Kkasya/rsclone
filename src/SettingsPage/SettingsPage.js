import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';

import styles from '../common/styles/styles';
import SettingsItems from './SettingsItems';
import ToggleButtons from './ToggleButtons';
import ButtonPrimary from '../common/ButtonPrimary/ButtonPrimary';

export default function SettingsPage(props) {
  const commonStyles = styles();
  const {
    stateSettings,
    setSettings,
    isVisible,
    toggleVisibility,
    stateLang,
    toggleLang,
  } = props;

  return (
    <FormGroup className={commonStyles.settingsPage}>
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
