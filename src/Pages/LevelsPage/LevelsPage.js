import React from 'react';
import { Container } from '@material-ui/core';
import LevelsContent from './components/LevelsContent';
import stylesCommon from '../../common/styles/stylesCommon';

export default function LevelsPage() {
  const commonStyles = stylesCommon();
  const containerForLevels = `${commonStyles.container} ${commonStyles.containerLevels}`
  return (
    <Container
      maxWidth='lg'
      className={containerForLevels}
    >
      <LevelsContent />
    </Container>
  );
}
