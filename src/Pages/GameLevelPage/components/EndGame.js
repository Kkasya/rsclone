import React from "react";
import MessageWin from "./MessageWin";
import MessageLoosing from "./MessageLoosing";

export default function endGame({level, isWin}) {
  const Message =  isWin ? MessageWin  : MessageLoosing;

  return (
    <Message
      level={level}
    >
    </ Message>
  )
}