import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import styles from '../../common/styles/styles';
import NavCustom from '../NavCustom/NavCustom';
const classNames = require('classnames');

export default function RouteCustom({ isMain }) {
  const commonStyles = styles();
  const header = classNames(
    commonStyles.container,
    commonStyles.containerHeader,
  );

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
