import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/ButtonBase';
import { makeStyles } from '@material-ui/core';
import ItemLevelsPage from './ItemLevelsPage';
import styles from '../../common/styles/styles';
import LEVELS_LIST from './LIST_LEVELS';

const useStyles = makeStyles({
  btnClear: {
    background: 'linear-gradient(45deg, #375fa1 30%, #689cf2 90%)',
    width: '18rem',
    margin: '3rem',
    'font-size': '2.5rem',
  },

  heightFull: {
    height: '100vh',
  }
});

export default function Levels() {
  const classes = useStyles();
  const commonStyle = styles();
  const [passedLevels, setPassedLevels] = useState(LEVELS_LIST);

  const addPassedLevel = (level) => {
    const newPassedLevels = passedLevels.concat();
    newPassedLevels.forEach((item) => {
      if ((item.name === level) && (item.isCompleted === 'false')) item.isCompleted = 'true';
    })
    setPassedLevels(newPassedLevels);
  }

  const clearPassedLevel = () => {
    const newPassedLevels = passedLevels.concat();
    newPassedLevels.forEach((item) => item.isCompleted = 'false');
    setPassedLevels(newPassedLevels);
  }

  useEffect(() => {
    LEVELS_LIST.map((item) => addItemLevel(item));
  });

  function addItemLevel(item) {
    return (
      <ItemLevelsPage
        name={item.name}
        passedLevel={item.isCompleted}
        key={item.id}
      />
    )
  }

  const containerLevels = `${commonStyle.flexWrapper} ${classes.heightFull}`;
  const btnClear = `${commonStyle.btn} ${classes.btnClear}`;

  return (
    <div className={commonStyle.pageWrapper}>
      <div className={containerLevels}>
        {LEVELS_LIST.map((item) => addItemLevel(item))}
      </div>
      <div className={commonStyle.flexBtns}>
        <Button className={btnClear} onClick={() => clearPassedLevel()}>
          <p>Reset progress</p>
        </Button>
      </div>
    </div>
  );
}
