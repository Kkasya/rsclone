import React from 'react';
import { Container } from '@material-ui/core';
import Nav from '../../common/Navigation/Nav/Nav';
import stylesCommon from '../../common/styles/stylesCommon';

export default function StartPage() {
  const commonStyles = stylesCommon();
  const authModal = document.getElementById('login-modal_container');

  return (
    <Container
      maxWidth="lg"
      className={commonStyles.container}
    >
      <div className={commonStyles.containerPage}>
        {authModal ? authModal.classList.contains('hidden') ? authModal.classList.remove('hidden') : authModal.classList.contains('hidden') : authModal}
        <Nav isNavbar={false} />
      </div>
    </Container>
  );
}
