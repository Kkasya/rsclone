import React from 'react';
import { Container } from '@material-ui/core';
import Team from './components/Team';
import stylesCommon from '../../common/styles/stylesCommon';

export default function TeamPage() {
  const commonStyles = stylesCommon();
  return (
    <Container
      maxWidth='lg'
      className={commonStyles.container}
    >
      <Team />
    </Container>
  );
}
