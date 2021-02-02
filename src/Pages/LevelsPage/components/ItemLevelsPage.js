import React from 'react';
import { Button } from '@material-ui/core/';
import stylesCommon from '../../../common/styles/stylesCommon';
import stylesLevelsPage from '../stylesLevelsPage';
const checkMarkGreen = `/assets/icons/checkMarkGreen.png`;

export default function ItemLevelsPage({ name, isCompleted }) {
  const commonStyles = stylesCommon();
  const useStyles = stylesLevelsPage();
  const buttonAndCompleted = `${commonStyles.button} ${useStyles.buttonCompleted}`;

  const chooseLevel = (event) => {
    // open choose level
  };

  return (
    <div className={useStyles.containerButtonsLevels}>
      <img
        src={checkMarkGreen}
        alt='checkMark'
        width='20'
        height='20'
        className={isCompleted ? useStyles.completedMark : commonStyles.invis}
      />
      <Button
        variant='contained'
        className={isCompleted ? buttonAndCompleted : commonStyles.button}
        onClick={chooseLevel}
      >
        {name}
      </Button>
    </div>
  );
}
