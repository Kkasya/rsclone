import React from 'react';
import stylesCommon from '../../common/styles/stylesCommon';
import { Container } from '@material-ui/core';
import GameCanvas from './GameCanvas';

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
