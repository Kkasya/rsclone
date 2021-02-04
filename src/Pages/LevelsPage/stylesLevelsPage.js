import { makeStyles } from '@material-ui/core';
import constants from "../../common/styles/constants";

const stylesLevelsPage = makeStyles({
  buttonsLevelsWrapper: {
    padding: '10vh 0',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '50px',

  },

  containerButtonsLevels: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '20px',
  },

  containerGame: {
    backgroundColor: constants.backgroundColorMainGame,
  },

  completedMark: {
    position: 'absolute',
    transform: 'translateX(-110%)',
  },

  buttonCompleted: {
    opacity: '0.6',
  },
});

export default stylesLevelsPage;
