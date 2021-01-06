import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import LevelsPage from '../LevelsPage/LevelsPage';
import SettingsPage from '../SettingsPage/SettingsPage';
import HelpPage from '../HelpPage/HelpPage';

export default function SwitchCustom() {
  return (
    <Switch>

      <Route
        exact
        path='/'
        render={() => <Redirect to='/levels' />}
      />

      <Route path='/levels'>
        <LevelsPage />
      </Route>

      <Route path='/settings'>
        <SettingsPage />
      </Route>

      <Route path='/help'>
        <HelpPage />
      </Route>

      <Route path="*" render={() => <Redirect to='/levels' />} />

    </Switch>
  );
}
