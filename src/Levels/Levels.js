import React from "react";
import {LevelsPage} from "./LevelsPage";
import {LIST_LEVELS} from "../common";

export function Levels() {
  const isTrueListLevels = LIST_LEVELS.filter((item) => item.isReady === 'true');
  return (
    <div>
      <LevelsPage
        title='Select a Level'
        variant="h2"
        color="secondary"
        name='Level'
        itemList={isTrueListLevels}
      />
    </div>
  )
}