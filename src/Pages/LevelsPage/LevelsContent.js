import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import ItemLevelsPage from './ItemLevelsPage';
import LEVELS_LIST from './LIST_LEVELS';
import stylesCommon from '../../common/styles/stylesCommon';
import stylesLevelsPage from './stylesLevelsPage';

export default function LevelsContent() {
  const commonStyles = stylesCommon();
  const useStyles = stylesLevelsPage();
  const buttonAndBig = `${commonStyles.button} ${commonStyles.buttonBig} ${useStyles.buttonReset}`;

  const [passedLevels, setPassedLevels] = useState(LEVELS_LIST);

  const clearPassedLevel = () => {
    const newPassedLevels = [...passedLevels];
    newPassedLevels.forEach((item) => item.isCompleted = false);
    setPassedLevels(newPassedLevels);
  };

  const levelsListComponents = LEVELS_LIST.map((item) => {
    return (
      <ItemLevelsPage
        name={item.name}
        isCompleted={item.isCompleted}
        key={item.id}
      />
    );
  });

  return (
    <div>
      <div className={useStyles.buttonsLevelsWrapper}>
        {levelsListComponents}
      </div>
      <div className={commonStyles.containerInlineCenter}>
        <Button
          variant='contained'
          className={buttonAndBig}
          onClick={clearPassedLevel}
        >
          Reset progress
        </Button>
      </div>
    </div>
  );
}
