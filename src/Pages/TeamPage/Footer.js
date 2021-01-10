import React from 'react';
import stylesTeamPage from './stylesTeamPage';
import stylesCommon from '../../common/styles/stylesCommon';
const iconRss = `${process.env.PUBLIC_URL}/assets/icons/rs_school_js.svg`;
const urlRss = 'https://rs.school/js/';

export default function Footer() {
  const useStylesTeamPage = stylesTeamPage();
  const useStylesCommon = stylesCommon();

  return (
    <div className={useStylesCommon.containerInlineCenter}>
      <span className={useStylesTeamPage.footerYear}>2021</span>
      <a
        href={urlRss}
        target='_blank'
        rel='noreferrer'
      >
        <img
          className={useStylesTeamPage.icon}
          src={iconRss}
          alt='RSSchool-logo'
        />
      </a>
    </div>
  );
}
