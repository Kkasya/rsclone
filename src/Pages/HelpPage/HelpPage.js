
import React from 'react';
import { Container } from '@material-ui/core';
import stylesCommon from '../../common/styles/stylesCommon';
<<<<<<< HEAD
import HelpContent from './HelpComponents/HelpContent';
=======
>>>>>>> 6edaa8f788214c858620b3b6b456ff1366f42177

export default function HelpPage() {
  const commonStyles = stylesCommon();
  return (
    <Container
      maxWidth='lg'
      className={commonStyles.container}
    >
      <HelpContent key={'helpContent'} />
    </Container>
  );
}