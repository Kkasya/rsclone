import React from 'react';
import { Container } from '@material-ui/core';
import Nav from '../../common/Navigation/Nav/Nav';
import stylesCommon from '../../common/styles/stylesCommon';

export default function StartPage() {
  const commonStyles = stylesCommon();
  const wrapperStartPage = `${commonStyles.containerPage} ${commonStyles.containerPageCenter}`;

  return (
    <Container
      maxWidth='lg'
      className={commonStyles.container}
    >
      <div className={wrapperStartPage}>
        <Nav isNavbar={false} />
      </div>
    </Container>
  );
}
