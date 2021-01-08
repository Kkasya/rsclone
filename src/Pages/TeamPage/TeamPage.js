import React from 'react';
import stylesCommon from '../../common/styles/stylesCommon';
import { Container } from '@material-ui/core';

export default function TeamPage() {
  const commonStyles = stylesCommon();
  return (
    <Container
      maxWidth='lg'
      className={commonStyles.container}
    >
      <div className={commonStyles.teamPage}>
        <h1>TeamPage</h1>
      </div>
    </Container>
  );
}
