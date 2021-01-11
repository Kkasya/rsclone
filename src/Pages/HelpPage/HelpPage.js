import React from 'react';
import { Container } from '@material-ui/core';
import GameCanvas from './GameCanvas';
import stylesCommon from '../../common/styles/stylesCommon';

export default function HelpPage() {
  const commonStyles = stylesCommon();
  return (
    <Container
      maxWidth="lg"
      className={commonStyles.container}
    >
      <GameCanvas />
    </Container>
  );
}
