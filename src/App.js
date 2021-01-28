import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Switcher from './common/Navigation/Switcher/Switcher';
import Logo from './common/Navigation/Logo/Logo';
import Nav from './common/Navigation/Nav/Nav';
import UserProfile from './common/Navigation/UserProfile/UserProfile';
import stylesCommon from './common/styles/stylesCommon';

export default function App() {
  const commonStyles = stylesCommon();
  const header = `${commonStyles.container} ${commonStyles.containerHeader}`;

  return (

    <Router>
      <div className={commonStyles.root}>
        <Container
          maxWidth="lg"
          className={header}
        >
          <Logo />
          <div className={commonStyles.navBarAndProfile} >
            <Nav isNavbar={true} />
            <UserProfile />
          </div>

        </Container>
        <Switcher />
      </div>
    </Router>
  );
}