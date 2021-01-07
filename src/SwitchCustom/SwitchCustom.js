import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import StartPage from '../StartPage/StartPage';
import LevelsPage from '../LevelsPage/LevelsPage';
import SettingsPage from '../SettingsPage/SettingsPage';
import HelpPage from '../HelpPage/HelpPage';
import TeamPage from '../TeamPage/TeamPage';

export default function SwitchCustom() {
  return (
    <Switch>

      <Route
        exact
        path='/'
      >
        <StartPage />
      </Route>

      <Route
        exact
        path='/levels'
      >
        <LevelsPage />
      </Route>

      <Route path='/settings'>
        <SettingsPage />
      </Route>

      <Route path='/help'>
        <HelpPage />
      </Route>

      <Route path='/team'>
        <TeamPage />
      </Route>

      <Route path="*" render={() => <Redirect to='/' />} />

    </Switch>
  );
}
