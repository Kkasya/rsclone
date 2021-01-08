import React from 'react';
import stylesCommon from '../../common/styles/stylesCommon';
import { Container } from '@material-ui/core';

export default function HelpPage() {
  const commonStyles = stylesCommon();
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
