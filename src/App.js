import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from 'react-router-dom';

import LevelsPage from './LevelsPage/LevelsPage';
import SettingsPage from './SettingsPage/SettingsPage';
import HelpPage from './HelpPage/HelpPage';
import TeamPage from './TeamPage/TeamPage';
import StartPage from './StartPage/StartPage';

import styles from './common/styles/styles';

export default function App() {
  const [stateSettings, setSettings] = React.useState(
    [
      {
        id: 'areEffectsOn',
        state: true,
      },
      {
        id: 'isMusicOn',
        state: true,
      },
      {
        id: 'areTipsOn',
        state: true,
      },
    ],
  );

  const [isVisible, toggleVisibility] = React.useState(true);
  const [stateLang, toggleLang] = React.useState('ru');

  const commonStyles = styles();

  return (
    <Router className={commonStyles.root} >
      <div>
        <nav>
          <ul className={commonStyles.navbar}>
            <li>
              <NavLink to='/' activeClassName='activeNavLink' exact>Start</NavLink>
            </li>
            <li>
              <NavLink to='/levels' activeClassName='activeNavLink'>Levels</NavLink>
            </li>
            <li>
              <NavLink to='/settings' activeClassName='activeNavLink'>Settings</NavLink>
            </li>
            <li>
              <NavLink to='/help' activeClassName='activeNavLink'>Help</NavLink>
            </li>
            <li>
              <NavLink to='/team' activeClassName='activeNavLink'>Team</NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path='/' component={StartPage} />
          <Route exact path='/levels' component={LevelsPage} />
          <Route path='/settings'>
            <SettingsPage
              stateSettings={stateSettings}
              setSettings={setSettings}
              isVisible={isVisible}
              toggleVisibility={toggleVisibility}
              stateLang={stateLang}
              toggleLang={toggleLang}
            />
          </Route>
          <Route path='/help' component={HelpPage} />
          <Route path='/team' component={TeamPage} />
          {/* <Route path="*" render={() => <Redirect to='/' />} /> */}
        </Switch>
      </div>
    </Router>
  );
}
