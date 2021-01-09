import React from 'react';
import { FormGroup, Container } from '@material-ui/core';
import SettingsItems from './SettingsItems';
import ToggleButtons from './ToggleButtons';
import stylesCommon from '../../common/styles/stylesCommon';
import stylesSettingsPage from './stylesSettingsPage';

export default function SettingsPage() {
  const commonStyles = stylesCommon();
  const useStyles = stylesSettingsPage();
  const containerSettingsPage = `${commonStyles.containerPage} ${useStyles.settingsPage}`;

  return (
    <Container
      maxWidth='lg'
      className={commonStyles.container}
    >
      <FormGroup className={containerSettingsPage}>
        <div className={useStyles.settingsCheckboxes}>
          <SettingsItems />
        </div>
        <ToggleButtons />
      </FormGroup>
    </Container>
  );
}
