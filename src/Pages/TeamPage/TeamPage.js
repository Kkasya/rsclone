import React from 'react';
import stylesCommon from '../../common/styles/stylesCommon';
import { Container } from '@material-ui/core';
import Team from './components/Team';

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
