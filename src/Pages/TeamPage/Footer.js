import React from 'react';
import { makeStyles } from '@material-ui/core';
import styles from '../../common/styles/styles';
import { iconRss, urlRss } from './constants';

const useStyles = makeStyles({
  footer: {
    fontSize: '2.5rem',
    justifyContent: 'center',
    '& *': {
      margin: '0.5rem',
    }
  },

  icon: {
    height: '2.5rem',
  }
});

export default function Footer() {
  const commonStyle = styles();
  const classes = useStyles();
  const footerWrapper = `${commonStyle.flexInlineItems} ${classes.footer}`;
  return (
    <div className={footerWrapper}>
      <div className={classes.nameMember}>2021</div>
      <div> <a href={urlRss} target='_blank'>
        <img className={classes.icon} src={iconRss}></img>
      </a></div>


    </div>
  );
}
