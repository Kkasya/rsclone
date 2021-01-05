import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';

import styles from '../common/styles/styles';
import SettingsItems from './SettingsItems';
import ToggleButtons from './ToggleButtons';

export default function SettingsPage() {
  const commonStyles = styles();

  return (
    <FormGroup className={commonStyles.settingsPage}>
      <SettingsItems />
      <ToggleButtons />
    </FormGroup>
  );
}
