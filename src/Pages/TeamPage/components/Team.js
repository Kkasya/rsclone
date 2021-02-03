import React from 'react';
import ItemTeamPage from './ItemTeamPage';
import FooterTeam from './FooterTeam';
import stylesTeamPage from '../stylesTeamPage';
import TEAM_MEMBERS_EN from '../TEAM_MEMBERS_EN';
import TEAM_MEMBERS_RU from '../TEAM_MEMBERS _RU'
import { connect } from 'react-redux';

function TeamPage({ lang }) {
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
        {lang === 'en' ? TEAM_MEMBERS_EN.map((item) => addItemTeamMembers(item)) : TEAM_MEMBERS_RU.map((item) => addItemTeamMembers(item))}
      </div>
      <FooterTeam />
    </div>
  );
}

const mapStateToProps = (state) => ({
  lang: state.lang
});

export default connect(mapStateToProps)(TeamPage);