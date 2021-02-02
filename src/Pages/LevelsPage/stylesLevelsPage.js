import { makeStyles } from '@material-ui/core';

const stylesLevelsPage = makeStyles({
  containerLevels: {
    paddingTop: '5vh',
    justifyContent: 'center',
  },

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
