import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  Redirect,
} from 'react-router-dom';
import StartPage from './StartPage/StartPage';
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
              <NavLink to='/' activeclassname='activeNavLink' exact>Start</NavLink>
            </li>
            <li>
              <Link to='/levels' activeclassname='activeNavLink'>Levels</Link>
            </li>
            <li>
              <Link to='/settings' activeclassname='activeNavLink'>Settings</Link>
            </li>
            <li>
              <Link to='/help' activeclassname='activeNavLink'>Help</Link>
            </li>
          </ul>
        </nav>

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

          <Route
            path="*"
            render={() => <Redirect to='/' />}
          />

        </Switch>

      </div>
    </Router>
  );
}
