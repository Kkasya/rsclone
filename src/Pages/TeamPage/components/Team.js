import React from 'react';
import stylesTeamPage from '../stylesTeamPage';
import ItemTeamPage from './ItemTeamPage';
import FooterTeam from './FooterTeam';
import TEAM_MEMBERS from '../TEAM_MEMBERS';

export default function TeamPage() {
  const useStylesTeamPage = stylesTeamPage();

  const addItemTeamMembers = (item) => {
    return (
      <ItemTeamPage
        key={item.id}
        photoName={item.photoName}
        name={item.name}
        gitHub={item.gitHub}
        about={item.about}
      />
    );
  }

  return (
    <div>
      <div className={useStylesTeamPage.contentWrapper}>
        {TEAM_MEMBERS.map((item) => addItemTeamMembers(item))}
      </div>
      <FooterTeam />
    </div>
  );
}
