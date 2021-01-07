import React from "react";
import {makeStyles} from "@material-ui/core";
import {styles} from "../../../common/styles";
import {urlGitHub, iconGitHub} from "../../../common/constants";

const objStyle = {
  cardMember: {
    backgroundColor: 'rgba(242, 242, 167, 0.3)',
    'border-radius': '1rem',
    width: '35%',
    boxShadow: '0 0.4rem 0.7rem 0.2rem rgba(0, 0, 135, 0.6)',
    flexDirection: "column",
    margin: '1rem 2rem',
    '& *': {
      margin: '0 0.5rem 0.5rem',
    },
    '&:hover': {
      boxShadow: '0 0.2rem 0.4rem 0.1rem rgba(0, 0, 135, 0.6)',
      backgroundColor: 'rgba(242, 242, 167, 0.4)',
    }
  },

  photoMember: {
    'border-radius': '1rem',
    width: '70%',
    height: '20rem',
    'background-size': 'cover',
  },

  nameMember: {
    color: 'rgb(13, 62, 143)',
    fontSize: '1.8rem',
    '&:hover': {
      opacity: 0.7,
    },
  },

  icon: {
    width: '2rem',
    height: '2rem',
  },

  aboutMember: {
    fontSize: '1.2rem',
    textAlign: 'justify',
    padding: '0 1rem 0 1rem',
  }
};

export function ItemTeamPage(props) {
  const commonStyle = styles();
  const {photo, name, gitHub, about} = props;
  objStyle.photoMember.background = `url(${photo}) no-repeat`;

  const useStyles = makeStyles(objStyle);
  const classes = useStyles();
  const styleCard = commonStyle.flexInlineItems + ' ' + classes.cardMember;

  return (
    <div className={styleCard}>
      <div className={classes.photoMember}></div>
      <a className={commonStyle.flexInlineItems} href={urlGitHub + gitHub} target='_blank'>
        <div className={classes.nameMember}>{name}</div>
        <img className={classes.icon} src={iconGitHub}></img>
      </a>
      <p className={classes.aboutMember}>{about}</p>
    </div>
  )
}