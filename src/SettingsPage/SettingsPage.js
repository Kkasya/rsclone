import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import { Container } from '@material-ui/core';
import styles from '../common/styles/styles';
import SettingsItems from './SettingsItems';
import ToggleButtons from './ToggleButtons';

export default function SettingsPage() {
  const commonStyles = styles();

  return (
    <Container
      maxWidth="lg"
      className={commonStyles.container}
    >
      <FormGroup className={commonStyles.settingsPage}>
        <div className={commonStyles.settingsCheckboxes}>
          <SettingsItems />
        </div>
        <ToggleButtons />
      </FormGroup>
    </Container>
  );
}
