import React from 'react';
import LevelsPage from '../LevelsPage/LevelsPage';
import SettingsPage from '../SettingsPage/SettingsPage';
import HelpPage from '../HelpPage/HelpPage';

export default function MainPage(props) {
  const {
    stateSettings,
    setSettings,
    isVisible,
    toggleVisibility,
    stateLang,
    toggleLang,
  } = props;

  return (
    <>
      <LevelsPage />
      <SettingsPage
        stateSettings={stateSettings}
        setSettings={setSettings}
        isVisible={isVisible}
        toggleVisibility={toggleVisibility}
        stateLang={stateLang}
        toggleLang={toggleLang}
      />
      <HelpPage />
    </>
  );
}
