import React from 'react';
import { Container } from '@material-ui/core';
import stylesCommon from '../../common/styles/stylesCommon';
import LevelsContent from './LevelsContent';

export default function LevelsPage() {
  const commonStyles = stylesCommon();
  return (
    <Container
      maxWidth='lg'
      className={commonStyles.container}
    >
      <LevelsContent />
    </Container>
  );
}
