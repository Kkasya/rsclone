import React from 'react';
import MainPage from './MainPage/MainPage';

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

  return (
    <MainPage
      stateSettings={stateSettings}
      setSettings={setSettings}
      isVisible={isVisible}
      toggleVisibility={toggleVisibility}
      stateLang={stateLang}
      toggleLang={toggleLang}
    />
  );
}
