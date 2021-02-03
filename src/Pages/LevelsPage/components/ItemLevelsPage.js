import React from 'react';
import { Button } from '@material-ui/core/';
import stylesCommon from '../../../common/styles/stylesCommon';
import stylesLevelsPage from '../stylesLevelsPage';
const checkMarkGreen = `/assets/icons/checkMarkGreen.png`;

export default function ItemLevelsPage({ name, isCompleted }) {
  const commonStyles = stylesCommon();
  const useStyles = stylesLevelsPage();
  const buttonAndCompleted = `${commonStyles.button} ${useStyles.buttonCompleted}`;

  return (
    <div className={useStyles.containerButtonsLevels}>
      {isCompleted && <img
        src={checkMarkGreen}
        alt='checkMark'
        width='20'
        height='20'
        className={useStyles.completedMark}
      />}
      <Button
        variant='contained'
        className={isCompleted ? buttonAndCompleted : commonStyles.button}
      >
        {name}
      </Button>
    </div>
  );
}
