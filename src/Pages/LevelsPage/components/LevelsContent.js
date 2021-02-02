import React from 'react';
import { NavLink } from "react-router-dom";
import DIFFERENT_CONSTANTS from './Game/constants/DIFFERENT_CONSTANTS';
import ItemLevelsPage from './ItemLevelsPage';
import stylesLevelsPage from '../stylesLevelsPage';

export default function LevelsContent() {
  const useStyles = stylesLevelsPage();

  const levelsListComponents = Array(DIFFERENT_CONSTANTS.levelsQuantity)
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
