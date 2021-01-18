import React from 'react';
import { Button } from '@material-ui/core/';
import stylesCommon from '../../../common/styles/stylesCommon';
import stylesLevelsPage from '../stylesLevelsPage';
const checkMarkGreen = `${process.env.PUBLIC_URL}/assets/icons/checkMarkGreen.png`;

export default function ItemLevelsPage({ name, isCompleted }) {
  const commonStyles = stylesCommon();
  const useStyles = stylesLevelsPage();
  const buttonAndCompleted = `${commonStyles.button} ${useStyles.buttonCompleted}`;
  const hiddenMark = `${useStyles.completedMark} ${commonStyles.invis}`


  return (
    <div className={useStyles.containerButtonsLevels}>
      <img
        src={checkMarkGreen}
        alt='checkMark'
        width='20'
        height='20'
        className={isCompleted ? useStyles.completedMark : hiddenMark}
      />
      <Button
        variant='contained'
        className={isCompleted ? buttonAndCompleted : commonStyles.button}
      >
        {name}
      </Button>
    </div>
  );
}
