import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import GameLevelPage from "../../../Pages/GameLevelPage/GameLevelPage";

export default function ChooseLevels() {
  return (
    <Switch>
      <Route exact path='/level1' component={() => <GameLevelPage level='1'/>}/>
      <Route exact path='/level2' component={() => <GameLevelPage level='2'/>}/>
      <Route exact path='/level3' component={() => <GameLevelPage level='3'/>}/>
      <Route exact path='/level4' component={() => <GameLevelPage level='4'/>}/>
      <Route exact path='/level5' component={() => <GameLevelPage level='5'/>}/>
      <Route exact path='/level6' component={() => <GameLevelPage level='6'/>}/>
      <Route exact path='/level7' component={() => <GameLevelPage level='7'/>}/>
      <Route exact path='/level8' component={() => <GameLevelPage level='8'/>}/>
      <Route exact path='/level9' component={() => <GameLevelPage level='9'/>}/>
      <Route exact path='/level10' component={() => <GameLevelPage level='10'/>}/>
      <Route exact path='/level11' component={() => <GameLevelPage level='11'/>}/>
      <Route exact path='/level12' component={() => <GameLevelPage level='12'/>}/>
    </Switch>
  );
}
