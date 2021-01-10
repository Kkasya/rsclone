import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import stylesCommon from '../../styles/stylesCommon';
import Nav from '../Nav/Nav';

export default function Routing({ isMain }) {
  const commonStyles = stylesCommon();
  const header = `${commonStyles.container} ${commonStyles.containerHeader}`;

  return (
    <Route
      path="/"
      render={({ match }) => {
        const isOnStart = (match.path === '/' && match.isExact);

        if (isMain) {
          return (
            <Nav
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
            <Nav
              isOnStart={isOnStart}
              isMain={isMain}
            />
          </Container>
        );
      }}
    />
  );
}
