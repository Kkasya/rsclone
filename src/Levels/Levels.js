import React from "react";
import {LevelsPage} from "./LevelsPage";
import {LIST_LEVELS} from "../common";

export function Levels() {
  return (
    <div>
      <LevelsPage
        title='Select a Level'
        variant="h2"
        color="secondary"
        itemList={LIST_LEVELS}
      />
    </div>
  )
}