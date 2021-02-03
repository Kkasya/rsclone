import React from 'react';
import { Container } from '@material-ui/core';
import Nav from '../../common/Navigation/Nav/Nav';
import stylesCommon from '../../common/styles/stylesCommon';

export default function StartPage() {
  const commonStyles = stylesCommon();

  return (
    <Container
      maxWidth='lg'
      className={commonStyles.container}
    >
      <div className={commonStyles.containerPage}>
        <Nav isNavbar={false} />
      </div>
    </Container>
  );
}
