import React from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

export default function ToggleButtons({ stateLang, toggleLang }) {
  const handleLang = (event, newLang) => {
    if (newLang) {
      toggleLang(newLang);
    }
  };

  return (
    <ToggleButtonGroup
      value={stateLang}
      exclusive
      onChange={handleLang}
    >
      <ToggleButton
        value="ru"
        style={{
          color: '#000',
        }}
      >
        RU
      </ToggleButton>
      <ToggleButton
        value="en"
        style={{
          color: '#000',
        }}
      >
        EN
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
