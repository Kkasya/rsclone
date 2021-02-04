import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';
import LEVELS from './Game/levels/LEVELS';
import ItemLevelsPage from './ItemLevelsPage';
import stylesCommon from '../../../common/styles/stylesCommon';
import stylesLevelsPage from '../stylesLevelsPage';
import { connect } from 'react-redux';
import { toggleLang, toggleSetting } from "../../../redux/actions";

function LevelsContent({ lang, settings }) {
  const commonStyles = stylesCommon();
  const useStyles = stylesLevelsPage();

  const buttonAndBig = `
    ${commonStyles.button}
    ${commonStyles.buttonBig}
    ${commonStyles.containerInlineCenter}
  `;
  const isShowBySetting = settings[0].state;
  const srcPressButton = `/assets/sounds/press1.mp3`;
  const audioPressButton = new Audio(srcPressButton);
  const playPress = () => {
    if (isShowBySetting) {
      audioPressButton.play();
    }
    setTimeout(() => clearPassedLevel(), 1000);
  }

  const levelsQuantity = Object.entries(LEVELS).length;
  const levelsListComponents = Array(levelsQuantity)
    .fill(0)
    .map((item, index) => {
      return (
        <NavLink to={`/levels/${index + 1}`} key={index + 1}>
          <ItemLevelsPage
            name={index + 1}
            isCompleted={localStorage.getItem(`dweep-${index + 1}`)}
          />
        </NavLink>
      );
    });

  const [, isRerenderComponent] = useState(false);
  const clearPassedLevel = () => {
    for (let i = 1; i <= levelsQuantity; i++) {
      localStorage.removeItem(`dweep-${i}`);
    }
    isRerenderComponent(true);
  };

  return (
    <div className={commonStyles.containerPage}>
      <div className={useStyles.buttonsLevelsWrapper}>
        {levelsListComponents}
      </div>
      <div className={commonStyles.containerInlineCenter}>
        <Button
          variant='contained'
          className={buttonAndBig}
          onClick={playPress}
        >
          {lang === 'en' ? 'Reset progress' : 'Сбросить прогресс'}
        </Button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  lang: state.lang,
  settings: state.settings,
});

const mapDispatchToProps = {
  toggleSetting,
  toggleLang
};

export default connect(mapStateToProps, mapDispatchToProps)(LevelsContent);
