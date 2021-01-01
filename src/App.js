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

  return (
    <OptionsMenu
      stateOptions={stateOptions}
      setOption={setOption}
      isVisible={isVisible}
      toggleVisibility={toggleVisibility}
    />
  );
}

export default App;
