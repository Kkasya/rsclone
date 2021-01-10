import React from 'react';
import { Container } from '@material-ui/core';
import RouteCustom from '../../Navigation/RouteCustom/RouteCustom';
import stylesCommon from '../../common/styles/stylesCommon';

export default function StartPage() {
  const commonStyles = stylesCommon();

  return (
    <Container
      maxWidth="lg"
      className={commonStyles.container}
    >
      <div className={commonStyles.containerPage}>
        <RouteCustom isMain={true} />
      </div>
    </Container>
  );
}
