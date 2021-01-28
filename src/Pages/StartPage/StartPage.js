import React from 'react';
import { Container } from '@material-ui/core';
import Nav from '../../common/Navigation/Nav/Nav';
import stylesCommon from '../../common/styles/stylesCommon';
import LoginModal from '../../common/Login/LoginModal';

export default function StartPage() {
  const commonStyles = stylesCommon();

  return (
    <Container
      maxWidth="lg"
      className={commonStyles.container}
    >
      <div className={commonStyles.containerPage}>
        <LoginModal />
        <Nav isNavbar={false} />
      </div>
    </Container>
  );
}
