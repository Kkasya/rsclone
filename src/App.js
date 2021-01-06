import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from 'react-router-dom';
import { Container } from '@material-ui/core';
import StartPage from './StartPage/StartPage';
import Logo from './Logo/Logo';
import LevelsPage from './LevelsPage/LevelsPage';
import SettingsPage from './SettingsPage/SettingsPage';
import HelpPage from './HelpPage/HelpPage';
import styles from './common/styles/styles';
const classNames = require('classnames');

export default function App() {
  const commonStyles = styles();
  const header = classNames(
    commonStyles.container,
    commonStyles.containerHeader,
  );

  return (
    <Router>
      <div className={commonStyles.root}>
        <Container
          maxWidth="lg"
          className={header}
        >
          <nav>
            <Logo />
            <ul className={commonStyles.navbar}>
              <li>
                <NavLink to='/' activeclassname='activeNavLink' exact>Start</NavLink>
              </li>

              <li>
                <NavLink to='/levels' activeclassname='activeNavLink'>Levels</NavLink>
              </li>

              <li>
                <NavLink to='/settings' activeclassname='activeNavLink'>Settings</NavLink>
              </li>
              <li>
                <NavLink to='/help' activeclassname='activeNavLink'>Help</NavLink>
              </li>
            </ul>
          </nav>
        </Container>

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
