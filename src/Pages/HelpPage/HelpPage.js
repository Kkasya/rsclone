import React from 'react';
import { Container } from '@material-ui/core';
import stylesCommon from '../../common/styles/stylesCommon';

export default function HelpPage() {
  const commonStyles = stylesCommon();
  return (
    <Container
      maxWidth='lg'
      className={commonStyles.container}
    >
      <h1>Help page</h1>
    </Container>
  );
}
