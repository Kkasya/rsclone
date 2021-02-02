import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import StartPage from '../../../Pages/StartPage/StartPage';
import LevelsPage from '../../../Pages/LevelsPage/LevelsPage';
import SettingsPage from '../../../Pages/SettingsPage/SettingsPage';
import HelpPage from '../../../Pages/HelpPage/HelpPage';
import TeamPage from '../../../Pages/TeamPage/TeamPage';
import GameContainer from '../../../Pages/LevelsPage/components/Game/GameContainer';
import DIFFERENT_CONSTANTS from '../../../Pages/LevelsPage/components/Game/constants/DIFFERENT_CONSTANTS';

export default function Switcher() {
  const isLevelExists = ({ match }) => {
    const levelNumber = Number(match.params.id);

    if (
        levelNumber < 1 
        || levelNumber > DIFFERENT_CONSTANTS.levelsQuantity
        || (levelNumber ^ 0) !== levelNumber
      ) {
      return <Redirect to='/levels' />
    }

    return <GameContainer levelNumber={levelNumber} />
  }

  return (
    <Switch>
      <Route exact path='/' component={StartPage} />
      <Route exact path='/levels' component={LevelsPage} />
      <Route path='/levels/:id' component={(...props) => isLevelExists(...props)} />
      <Route path='/settings' component={SettingsPage} />
      <Route path='/help' component={HelpPage} />
      <Route path='/team' component={TeamPage} />
      <Redirect path='*' to='/' />
    </Switch>
  );
}
