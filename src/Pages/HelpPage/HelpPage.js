
import React from 'react';
import { Container } from '@material-ui/core';
import stylesCommon from '../../common/styles/stylesCommon';
import helpCardStyles from "./HelpStyles";
import HelpContent from './components/HelpContent';
import helpStyles from "./HelpStyles";

export default function HelpPage() {
  const commonStyles = stylesCommon();
  const classes = helpStyles();
  const helpPage = `${commonStyles.container} ${classes.helpPage}`;

  return (
    <Container
      maxWidth='lg'
      className={helpPage}
    >
      <HelpContent />
    </Container>
  );
}

