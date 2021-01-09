import React from 'react';
import stylesTeamPage from './stylesTeamPage';
import ItemTeamPage from './ItemTeamPage';
import Footer from './Footer';
import TEAM_MEMBERS from './TEAM_MEMBERS';

export default function TeamPage() {
  const useStylesTeamPage = stylesTeamPage();

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
    <div>
      <div className={useStylesTeamPage.contentWrapper}>
        {TEAM_MEMBERS.map((item) => addItemTeamMembers(item))}
      </div>
      <Footer />
    </div>
  );
}
