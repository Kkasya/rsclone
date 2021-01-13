import React from 'react';
import {Container} from '@material-ui/core';
import LevelsContent from './components/LevelsContent';
import stylesCommon from '../../common/styles/stylesCommon';

export default function LevelsPage() {
  const commonStyles = stylesCommon();
  return (
    <Container
      maxWidth='lg'
      className={commonStyles.container}
    >
      <LevelsContent/>
    </Container>
  );
}
