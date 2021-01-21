import React from "react";
import {NavLink, Route} from "react-router-dom";
import {Button} from '@material-ui/core';
import * as MESSAGES from "../MESSAGES.json";
import stylesGameLevelPage from "../stylesGameLevelPage";
import GameLevelPage from "../GameLevelPage";

export default function messageWin({level}) {
  const {title, description} = MESSAGES.loosing;
  const useStylesGameLevelPage = stylesGameLevelPage();
  const styleModal = `${useStylesGameLevelPage.modal} ${useStylesGameLevelPage.loosing}`

  return (
    <>
      <div className={styleModal}>
        <h1 className={useStylesGameLevelPage.title}>{title}</h1>
        <p className={useStylesGameLevelPage.description}>{description}</p>
        <div className={useStylesGameLevelPage.btnWrapper}>
          <NavLink to={`/levels/${level}`} key={level}>
            <Button
              variant='outlined'
              className={useStylesGameLevelPage.btnClose}
            >Restart level
            </Button>
          </NavLink>
        </div>
      </div>
      <Route exact path='/levels/:{id}' component={(props) => <GameLevelPage  {...props}/>}/>
    </>
  );
}