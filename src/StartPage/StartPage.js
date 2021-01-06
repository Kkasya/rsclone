import React from 'react';
import styles from '../common/styles/styles';
import { Container } from '@material-ui/core';

export default function StartPage() {
  const commonStyles = styles();
  return (
    <Container
      maxWidth="lg"
      className={commonStyles.container}
    >
      <div>
        <h1>StartPage</h1>
      </div>
    </Container>
  );
}
