import React from 'react';
import { NavLink } from "react-router-dom";
import ItemLevelsPage from './ItemLevelsPage';
import stylesLevelsPage from '../stylesLevelsPage';
import LEVELS from './Game/levels/LEVELS';

export default function LevelsContent() {
  const useStyles = stylesLevelsPage();

  const levelsListComponents = Array(Object.entries(LEVELS).length)
    .fill(0)
    .map((item, index) => {
      return (
        <NavLink to={`/levels/${index + 1}`} key={index + 1}>
          <ItemLevelsPage
            name={index + 1}
          />
        </NavLink>
      );
    });

  return (
    <div className={useStyles.buttonsLevelsWrapper}>
      {levelsListComponents}
    </div>
  );
}
