import React from 'react';
import MainMenu from './MainMenu/MainMenu';

export default function App() {
  const [stateOptions, setOption] = React.useState(
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
    <MainMenu
      stateOptions={stateOptions}
      setOption={setOption}
      isVisible={isVisible}
      toggleVisibility={toggleVisibility}
      stateLang={stateLang}
      toggleLang={toggleLang}
    />
  );
}
