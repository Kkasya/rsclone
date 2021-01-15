import React, {useState} from 'react';
import {BrowserRouter as Router, NavLink} from "react-router-dom";
import {Button} from '@material-ui/core';
import ItemLevelsPage from './ItemLevelsPage';
import LEVELS_LIST from '../LIST_LEVELS';
import stylesCommon from '../../../common/styles/stylesCommon';
import stylesLevelsPage from '../stylesLevelsPage';
import ChooseLevels from "../../../common/Navigation/chooseLevels/ChooseLevels";


export default function LevelsContent() {
  const commonStyles = stylesCommon();
  const useStyles = stylesLevelsPage();
  const buttonAndBig = `
    ${commonStyles.button}
    ${commonStyles.buttonBig}
    ${commonStyles.containerInlineCenter}
  `;

  const [passedLevels, setPassedLevels] = useState(LEVELS_LIST);

  const clearPassedLevel = () => {
    const newPassedLevels = [...passedLevels];
    newPassedLevels.forEach((item) => item.isCompleted = false);
    setPassedLevels(newPassedLevels);
  };

  const levelsListComponents = LEVELS_LIST.map((item) => {
    return (
      <NavLink to={`/level${item.id}`} key={item.id}>
        <ItemLevelsPage
          name={item.name}
          isCompleted={item.isCompleted}
          key={item.id}
        />
      </NavLink>
    );
  });

  return (
    <Router>
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
      <ChooseLevels/>
    </Router>
  );
}
