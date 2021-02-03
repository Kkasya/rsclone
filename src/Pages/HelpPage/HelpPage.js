
import React from 'react';
import { Container } from '@material-ui/core';
import stylesCommon from '../../common/styles/stylesCommon';
import HelpContent from './components/HelpContent';

export default function HelpPage() {
  const commonStyles = stylesCommon();

  return (
    <Container
      maxWidth='lg'
      className={commonStyles.container}
    >
      <HelpContent />
    </Container>
  );
}

