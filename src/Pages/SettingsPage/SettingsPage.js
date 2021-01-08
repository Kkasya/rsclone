import React from 'react';
import { FormGroup, Container } from '@material-ui/core';
import styles from '../../common/styles/styles';
import SettingsItems from './SettingsItems';
import ToggleButtons from './ToggleButtons';
const classNames = require('classnames');

export default function SettingsPage() {
  const commonStyles = styles();
  const containerSettingsPage = classNames(
    commonStyles.containerPage,
    commonStyles.settingsPage,
  );

  return (
    <Container
      maxWidth='lg'
      className={commonStyles.container}
    >
      <FormGroup className={containerSettingsPage}>
        <div className={commonStyles.settingsCheckboxes}>
          <SettingsItems />
        </div>
        <ToggleButtons />
      </FormGroup>
    </Container>
  );
}
