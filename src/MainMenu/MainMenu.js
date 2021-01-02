import React from 'react';
import LevelsMenu from './LevelsMenu/LevelsMenu';
import OptionsMenu from './OptionsMenu/OptionsMenu';
import HelpMenu from './HelpMenu/HelpMenu';

export default function MainMenu(props) {
  const {
    stateOptions,
    setOption,
    isVisible,
    toggleVisibility,
    stateLang,
    toggleLang,
  } = props;

  return (
    <>
      <LevelsMenu />
      <OptionsMenu
        stateOptions={stateOptions}
        setOption={setOption}
        isVisible={isVisible}
        toggleVisibility={toggleVisibility}
        stateLang={stateLang}
        toggleLang={toggleLang}
      />
      <HelpMenu />
    </>
  );
}
