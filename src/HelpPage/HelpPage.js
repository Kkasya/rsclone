import React from 'react';
import styles from '../common/styles/styles';
import { Container } from '@material-ui/core';

export default function HelpPage() {
  const commonStyles = styles();
  return (
    <Container
      maxWidth="lg"
      className={commonStyles.container}
    >
      <div className={commonStyles.helpPage}>
        <h1>HelpPage</h1>
      </div>
    </Container>
  );
}
