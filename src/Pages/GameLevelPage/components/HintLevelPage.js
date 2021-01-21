import React, {useState} from "react";
import {Button} from '@material-ui/core';
import * as HINTS_LEVELS from "../HINT_LEVELS.json";
import stylesGameLevelPage from "../stylesGameLevelPage";
import { toggleSetting } from '../../../redux/actions';
import { connect } from 'react-redux';

function HintLevelPage({level, settings}) {
  const hints = HINTS_LEVELS.hints;
  const {title, description} = hints.find(hint => hint.id === level);
  const nameLevel = `Level ${level}`;
  const useStylesGameLevelPage = stylesGameLevelPage();
  const [isShow, hide] = useState(true);
  const isShowBySetting = settings[2].state;

  const hideModal = () => {
    hide(false);
  };


  return (
    <React.Fragment>
      {isShow && isShowBySetting && (
        <div className={useStylesGameLevelPage.modal}>
          <h1 className={useStylesGameLevelPage.title}>{nameLevel}: {title}</h1>
          <p className={useStylesGameLevelPage.description}>{description}</p>
          <Button
            variant='outlined'
            className={useStylesGameLevelPage.btnClose}
            onClick={hideModal}
          >OK
          </Button>
        </div>
      )}
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  settings: state.settings,
});

const mapDispatchToProps = {
  toggleSetting,
};

export default connect(mapStateToProps, mapDispatchToProps)(HintLevelPage);