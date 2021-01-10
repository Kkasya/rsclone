import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import stylesCommon from '../../common/styles/stylesCommon';
import NavCustom from '../NavCustom/NavCustom';

export default function RouteCustom({ isMain }) {
  const commonStyles = stylesCommon();
  const header = `${commonStyles.container} ${commonStyles.containerHeader}`;

  return (
    <Route
      path="/"
      render={({ match }) => {
        const isOnStart = (match.path === '/' && match.isExact);

        if (isMain) {
          return (
            <NavCustom
              isOnStart={isOnStart}
              isMain={isMain}
            />
          );
        }

        return (
          <Container
            maxWidth="lg"
            className={header}
          >
            <NavCustom
              isOnStart={isOnStart}
              isMain={isMain}
            />
          </Container>
        );
      }}
    />
  );
}
