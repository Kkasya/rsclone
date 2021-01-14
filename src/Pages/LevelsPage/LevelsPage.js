import React from 'react';
import { Container } from '@material-ui/core';
import LevelsContent from './components/LevelsContent';
import GameContainer from './components/Game/GameContainer';
import stylesCommon from '../../common/styles/stylesCommon';
import stylesLevelsPage from './stylesLevelsPage';

export default function LevelsPage() {
  const commonStyles = stylesCommon();
  const useStylesLevelsPage = stylesLevelsPage();
  const containerForLevels = `${commonStyles.container} ${useStylesLevelsPage.containerLevels}`
  return (
    <Container
      maxWidth='lg'
      className={containerForLevels}
    >
      {/* <LevelsContent /> */}
      <GameContainer />
    </Container>
  );
}
