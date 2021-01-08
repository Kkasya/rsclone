import React from 'react';
import { Container } from '@material-ui/core';
import styles from '../../common/styles/styles';
import Levels from './Levels';

export default function LevelsPage() {
  const commonStyles = styles();
  return (
    <Container
      maxWidth='lg'
      className={commonStyles.container}
    >
      <div className={commonStyles.levelsPage}>
        <Levels />
      </div>
    </Container>
  );
}
