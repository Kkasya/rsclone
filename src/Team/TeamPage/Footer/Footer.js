import React from "react";
import {makeStyles} from "@material-ui/core";
import {styles} from "../../../common/styles";
import {iconRss, urlRss} from "../../../common/constants";

const useStyles = makeStyles( {
  footer: {
    fontSize: '2.5rem',
    justifyContent: 'space-between',
    margin: '0 2rem 0 50%',
  },

  icon: {
    width: '5rem',
    height: '5rem',
  }
});

export function Footer() {
  const commonStyle = styles();
  const classes = useStyles();
  const footerWrapper = `${commonStyle.flexInlineItems} ${classes.footer}`;
return (
  <div className={footerWrapper}>
    <div className={classes.nameMember}>2021</div>
    <a href={urlRss}  target='_blank'>
      <img className={classes.icon} src={iconRss}></img>
    </a>

  </div>
)
}