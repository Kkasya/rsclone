import React from "react";
import {makeStyles} from "@material-ui/core";
import {styles} from "../../../common/styles";

const objStyle = {
  cardMember: {
    backgroundColor: 'rgba(242, 242, 167, 0.5)',
    'border-radius': '1rem',
    width: '40%',
    boxShadow: '0 0.4rem 0.7rem 0.2rem rgba(0, 0, 135, 0.5)',
    flexDirection: "column",
    '& *': {
      margin: '1rem',
    }
  },

  photoMember: {
    'border-radius': '1rem',
    width: '70%',
    height: '20rem',
   'background-size': 'cover',
  },

  nameMember: {
   color: '#0d3e8f',
    fontSize: '1.8rem',
  },

  aboutMember: {
    fontSize: '1.2rem',
    textAlign: 'justify',
  }
};

export function ItemTeamPage(props) {
  const commonStyle = styles();
  const {photo, name, about} = props;
  objStyle.photoMember.background = `url(${photo}) no-repeat`;

  const useStyles = makeStyles(objStyle);
  const classes =useStyles();
  const styleCard = commonStyle.flexInlineItems + ' ' + classes.cardMember;

  return (
    <div className={styleCard}>
      <div className={classes.photoMember}></div>
      <div className={classes.nameMember}>{name}</div>
      <p className={classes.aboutMember}>{about}</p>
    </div>
  )
}