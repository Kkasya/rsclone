import React, {useState, useEffect} from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/ButtonBase';
import {makeStyles} from "@material-ui/core";
import {ItemLevelsPage} from './ItemLevelsPage'
import {LIST_LEVELS} from "../../common/constants";
import {styles} from "../../common/styles";

const useStyles = makeStyles({
  footerLevels: {
    background: 'linear-gradient(45deg, #375fa1 30%, #689cf2 90%)',
    boxShadow: '0 3px 5px 2px rgba(91, 212, 252, .3)',
    width: '16rem',
    margin: '3rem',
    'font-size': '1.5rem',
    'border-radius': '1rem',
    outline: 'none',
    color: 'white',
  }
});

export function LevelsPage(props) {
  const [passedLevels, setPassedLevels] = useState(LIST_LEVELS);

  const addPassedLevel = (level) => {
    const newPassedLevels = passedLevels.concat();
    newPassedLevels.forEach((item) => {
      if ((item.name === level) && (item.isReady === 'false')) item.isReady = 'true';
    })
    setPassedLevels(newPassedLevels);
  }

  const clearPassedLevel = () => {
    const newPassedLevels = passedLevels.concat();
    newPassedLevels.forEach((item) => item.isReady = 'false');
    setPassedLevels(newPassedLevels);
  }

  const openPreviousScreen = () => {
    // open previous screen
  }

  const classes = useStyles();
  const commonStyle = styles();
  const {title, variant, itemList, color} = props;

  useEffect(() => {
    itemList.map((item) => addItemLevel(item));
  });

  function addItemLevel(item) {
    return (
      <ItemLevelsPage
        name={item.name}
        passedLevel={item.isReady}
        key={item.id}
      />
    )
  }

  return (
    <div>
      <Typography variant={variant} color={color}>{title}</Typography>
      <div className={commonStyle.flexWrapper}>
        {itemList.map((item) => addItemLevel(item))}
      </div>
      <div className={commonStyle.flexBtns}>
        <Button className={classes.footerLevels} key='left' onClick={() => clearPassedLevel()}>
          <p>Clear Checkmarks</p>
        </Button>
        <Button className={classes.footerLevels} key='right' onClick={() => openPreviousScreen()}>
          <p>Previous Screen</p>
        </Button>
      </div>
    </div>
  );
}