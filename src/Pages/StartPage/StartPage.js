import React from 'react';
import styles from '../../common/styles/styles';
import { Container } from '@material-ui/core';
import RouteCustom from '../../Navigation/RouteCustom/RouteCustom';

export default function StartPage() {
  const commonStyles = styles();

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
