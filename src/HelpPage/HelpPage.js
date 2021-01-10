
import React from 'react';
import { Container } from '@material-ui/core';
import styles from '../common/styles/styles';
import HelpContent from './HelpComponents/HelpContent';

export default function HelpPage() {
  const commonStyles = styles();
  return (
    <Container
      maxWidth='lg'
      className={commonStyles.container}
    >
      <HelpContent />
    </Container>
  );
}