import React from 'react';
import {makeStyles} from "@material-ui/core";
import Button from '@material-ui/core/ButtonBase';
import {styles} from "../../../common/styles";

const useStyles = makeStyles({
  btnLevel: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    'border-radius': '1rem',
    width: '12rem',
    outline: 'none',
    color: 'white',
    'font-size': '2rem',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },

  checkLevel: {
    width: '3rem',
    height: '3rem',
    'margin-right': '1rem',
  },

  passedLevel: {
    background: 'url("https://i.ibb.co/c64LFVt/check-marks.png") no-repeat',
    'background-size': 'cover',
  }
});

export function ItemLevelsPage(props) {

  const chooseLevel = (e) => {
    // open chose level
  }

  const classes = useStyles();
  const commonStyle = styles();
  const {name, passedLevel} = props;

  const isPassedLevel = () => {
    return (passedLevel === 'true') ? (classes.checkLevel + ' ' + classes.passedLevel) : classes.checkLevel;
  }

  return (
    <div className={commonStyle.flexInlineItems}>
      <div className={isPassedLevel()}></div>
      <Button className={classes.btnLevel} onClick={chooseLevel}>
        <p>{name}</p>
      </Button>
    </div>
  );
}