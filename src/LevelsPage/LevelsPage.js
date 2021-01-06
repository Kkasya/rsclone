import React from 'react';
import styles from '../common/styles/styles';
import { Container } from '@material-ui/core';

export default function LevelsPage() {
  const commonStyles = styles();
  return (
    <Container
      maxWidth="lg"
      className={commonStyles.container}
    >
      <div className={commonStyles.levelsPage}>
        <h1>LevelsPage</h1>
      </div>
    </Container>
  );
}
