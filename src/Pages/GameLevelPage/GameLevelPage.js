import React from "react";
import HintLevelPage from "./components/HintLevelPage";

export default function GameLevelPage(props) {
  const id = props.match.params.id;
  return (
    <HintLevelPage
      level={id}
    >
    </HintLevelPage>
  )
}