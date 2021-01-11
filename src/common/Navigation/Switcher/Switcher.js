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

export default function Switcher() {
  return (
    <Switch>
      <Route exact path='/' component={StartPage} />
      <Route exact path='/levels' component={LevelsPage} />
      <Route path='/settings' component={SettingsPage} />
      <Route path='/help' component={HelpPage} />
      <Route path='/team' component={TeamPage} />
      <Redirect path="*" to='/' />
    </Switch>
  );
}
