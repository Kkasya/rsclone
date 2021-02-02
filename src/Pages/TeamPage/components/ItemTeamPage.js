import React from 'react';
import { makeStyles } from '@material-ui/core';
import stylesTeamPage from '../stylesTeamPage';
const githubPrefix = 'https://github.com/';

const objPhotoMember = {
  photoMember: {
    marginBottom: '20px',
    borderRadius: '9px',
    width: '70%',
    height: '18rem',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
};

export default function ItemTeamPage({ photoName, name, gitHub, about }) {
  const photoUrl = `url(/assets/images/team-photos/${photoName})`
  objPhotoMember.photoMember.backgroundImage = photoUrl;

  const stylePhotoMember = makeStyles(objPhotoMember);
  const useStylePhotoMember = stylePhotoMember();
  const useStylesTeamPage = stylesTeamPage();

  return (
    <div className={useStylesTeamPage.cardWrapper}>
      <div className={useStylePhotoMember.photoMember}></div>
      <a
        className={useStylesTeamPage.nameWrapper}
        href={`${githubPrefix}${gitHub}`}
        target='_blank'
        rel='noreferrer'
      >
        <div className={useStylesTeamPage.nameMember}>{name}</div>
        <img
          className={useStylesTeamPage.icon}
          src='./assets/icons/github.png'
          alt={name}
        />
      </a>
      <p className={useStylesTeamPage.aboutMember}>{about}</p>
    </div>
  );
}
