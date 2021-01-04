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
            <SettingsPage
              stateSettings={stateSettings}
              setSettings={setSettings}
              isVisible={isVisible}
              toggleVisibility={toggleVisibility}
              stateLang={stateLang}
              toggleLang={toggleLang}
            />
          </Route>

          <Route path='/help'>
            <HelpPage />
          </Route>

        </Switch>

      </div>
    </Router>
  );
}
