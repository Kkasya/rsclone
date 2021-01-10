import React from 'react';
import { Container } from '@material-ui/core';
import Routing from '../../common/Navigation/Routing/Routing';
import stylesCommon from '../../common/styles/stylesCommon';

export default function StartPage() {
  const commonStyles = stylesCommon();

  return (
    <Container
      maxWidth="lg"
      className={commonStyles.container}
    >
      <div className={commonStyles.containerPage}>
        <Routing isMain={true} />
      </div>
    </Container>
  );
}
