import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import StartPage from '../../Pages/StartPage/StartPage';
import LevelsPage from '../../Pages/LevelsPage/LevelsPage';
import SettingsPage from '../../Pages/SettingsPage/SettingsPage';
import HelpPage from '../../Pages/HelpPage/HelpPage';
import TeamPage from '../../Pages/TeamPage/TeamPage';

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

      <Route path="*">
        <Redirect to='/' />
      </Route>

    </Switch>
  );
}
