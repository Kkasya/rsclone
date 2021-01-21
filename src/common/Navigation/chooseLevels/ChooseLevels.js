import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import GameLevelPage from "../../../Pages/GameLevelPage/GameLevelPage";

export default function ChooseLevels() {

  return (
    <Switch>
      <Route exact path='/levels'/>
      <Route exact path='/levels/:id' component={(props) => <GameLevelPage  {...props}/>}/>
    </Switch>
  );
}
