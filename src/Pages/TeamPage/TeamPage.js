import React from 'react';
import styles from '../../common/styles/styles';
import { Container } from '@material-ui/core';

export default function TeamPage() {
  const commonStyles = styles();
  return (
    <Container
      maxWidth="lg"
      className={commonStyles.container}
    >
      <div className={commonStyles.teamPage}>
        <h1>TeamPage</h1>
      </div>
    </Container>
  );
}
