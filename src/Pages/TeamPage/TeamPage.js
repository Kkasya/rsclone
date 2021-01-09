import React from 'react';
import stylesCommon from '../../common/styles/stylesCommon';
import { Container } from '@material-ui/core';
import Team from './Team';
import TEAM_MEMBERS from './TEAM_MEMBERS';

export default function TeamPage() {
  const commonStyles = stylesCommon();
  return (
    <Container
      maxWidth='lg'
      className={commonStyles.container}
    >
      <div className={commonStyles.teamPage}>
        <Team
          title='Team members'
          variant='h2'
          color='secondary'
          TEAM_MEMBERS={TEAM_MEMBERS}
        />
      </div>
    </Container>
  );
}
