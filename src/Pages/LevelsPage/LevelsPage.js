import React from 'react';
import { Container } from '@material-ui/core';
import LevelsContent from './components/LevelsContent';
import GameCanvas from './components/GameCanvas';
import stylesCommon from '../../common/styles/stylesCommon';
import stylesLevelsPage from './stylesLevelsPage';

export default function LevelsPage() {
  const commonStyles = stylesCommon();
  const useStylesLevelsPage = stylesLevelsPage();
  const aaa = `${commonStyles.container} ${useStylesLevelsPage.containerLevels}`
  return (
    <Container
      maxWidth='lg'
      className={aaa}
    >
      {/* <LevelsContent /> */}
      <GameCanvas />
    </Container>
  );
}
