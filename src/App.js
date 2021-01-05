import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

import LevelsPage from './LevelsPage/LevelsPage';
import SettingsPage from './SettingsPage/SettingsPage';
import HelpPage from './HelpPage/HelpPage';
import styles from './common/styles/styles';

export default function App() {
  const commonStyles = styles();

  return (
    <Router>
      <div>

        <nav>
          <ul className={commonStyles.navbar}>
            <li>
              <Link to='/levels'>Levels</Link>
            </li>
            <li>
              <Link to='/settings'>Settings</Link>
            </li>
            <li>
              <Link to='/help'>Help</Link>
            </li>
          </ul>
        </nav>

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

        </Switch>

      </div>
    </Router>
  );
}
