import React from "react";
import HintLevelPage from "../GameLevelPage/components/HintLevelPage";

export default function GameLevelPage(props) {
  const id = props.match.params.id;
  console.log(id);
  return (
    <HintLevelPage
      level={id}>
    </HintLevelPage>
  )
}