import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Switcher from './common/Navigation/Switcher/Switcher';
import Logo from './common/Navigation/Logo/Logo';
import Nav from './common/Navigation/Nav/Nav';
import stylesCommon from './common/styles/stylesCommon';

export default function App() {
  const commonStyles = stylesCommon();
  const header = `${commonStyles.container} ${commonStyles.containerHeader}`;

  return (
    <Router>
      <div className={commonStyles.root}>
        <Container
          maxWidth='lg'
          className={header}
        >
          <Logo />
          <Nav isNavbar={true} />
        </Container>
        <Switcher />
      </div>
    </Router>
  );
}
