import React from 'react';
import { Container } from '@material-ui/core';
import LevelsContent from './components/LevelsContent';
import stylesCommon from '../../common/styles/stylesCommon';
import {BrowserRouter as Router} from "react-router-dom";
import GameLevelPage from '../GameLevelPage/GameLevelPage'

export default function LevelsPage() {
  const commonStyles = stylesCommon();
  return (
    <Container
      maxWidth='lg'
      className={commonStyles.container}
    >
      <LevelsContent />
      <GameLevelPage
        level='1'>
      </GameLevelPage>
    </Container>

  );
}
