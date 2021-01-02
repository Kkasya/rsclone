import React from 'react';
import OptionsMenu from './OptionsMenu/OptionsMenu';

function App() {
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
    <OptionsMenu
      stateOptions={stateOptions}
      setOption={setOption}
      isVisible={isVisible}
      toggleVisibility={toggleVisibility}
      stateLang={stateLang}
      toggleLang={toggleLang}
    />
  );
}

export default App;
