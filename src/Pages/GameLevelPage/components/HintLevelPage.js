import React, {useState} from "react";
import {Button} from '@material-ui/core';
import HINTS_LEVELS from "../HINTS_LEVELS";
import stylesGameLevelPage from "../stylesGameLevelPage";

export default function HintLevelPage({level}) {
  const hints = HINTS_LEVELS;
  const {title, description} = hints.find(hint => hint.id === level);
  const nameLevel = `Level ${level}`;
  const useStylesGameLevelPage = stylesGameLevelPage();

  const [isShow, hide] = useState(true);

  const hideModal = () => {
    hide(false);
  };
  return (
    <React.Fragment>
      {isShow && (
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