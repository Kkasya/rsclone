import React from 'react';
import stylesCommon from '../../../common/styles/stylesCommon';
import stylesTeamPage from '../stylesTeamPage';
const urlRss = 'https://rs.school/js/';

export default function FooterTeam() {
  const useStylesTeamPage = stylesTeamPage();
  const useStylesCommon = stylesCommon();

  return (
    <div className={useStylesCommon.containerInlineCenter}>
      <span className={useStylesTeamPage.footerTeamYear}>2021</span>
      <a
        href={urlRss}
        target='_blank'
        rel='noreferrer'
      >
        <img
          className={useStylesTeamPage.icon}
          src='./assets/icons/rs_school_js.svg'
          alt='RSSchool-logo'
        />
      </a>
    </div>
  );
}
