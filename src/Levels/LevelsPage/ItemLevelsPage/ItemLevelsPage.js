import React from 'react';
import {makeStyles} from "@material-ui/core";
import Button from '@material-ui/core/ButtonBase';
import {styles} from "../../../common/styles";

const useStyles = makeStyles({
  btnLevel: {
    width: '15rem',
    'font-size': '2.5rem',
  },

  btnInactive: {
    cursor: 'default',
    opacity: '0.5',
    pointerEvents: 'none',
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

  const {name, passedLevel} = props;
  const classes = useStyles();
  const commonStyle = styles();
  const btnLevel = `${commonStyle.btn} ${classes.btnLevel}`;

  const chooseLevel = (e) => {
    // open chose level
  }

  const isPassedLevel = () => {
    return (passedLevel === 'true') ? (classes.checkLevel + ' ' + classes.passedLevel) : classes.checkLevel;
  }

  const isActiveBtn = () => {
    return (passedLevel !== 'true') ? btnLevel : (btnLevel + ' ' + classes.btnInactive);
  }

  return (
    <div className={commonStyle.flexInlineItems}>
      <div className={isPassedLevel()}></div>
      <Button className={isActiveBtn()} onClick={chooseLevel}>
        <p>{name}</p>
      </Button>
    </div>
  );
}