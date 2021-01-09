import React from 'react';
import Typography from '@material-ui/core/Typography';
import styles from '../../common/styles/styles';
import ItemTeamPage from './ItemTeamPage';
import Footer from './Footer';

export default function TeamPage({ title, variant, TEAM_MEMBERS, color }) {
  const commonStyles = styles();
  const teamWrapper = `${commonStyles.pageWrapper} ${commonStyles.flexWrapper}`;

  const addItemTeamMembers = (item) => {
    return (
      <ItemTeamPage
        key={item.id}
        photo={item.photo}
        name={item.name}
        gitHub={item.gitHub}
        about={item.about}
      />
    );
  }

  return (
    <div className={teamWrapper}>
      <Typography variant={variant} color={color}>{title}</Typography>
      <div className={commonStyles.flexWrapperRow}>
        {TEAM_MEMBERS.map((item) => addItemTeamMembers(item))}
      </div>
      <Footer />
    </div>
  );
}
