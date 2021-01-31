import { makeStyles } from '@material-ui/core';
import constants from '../styles/constants';

const stylesLogoutBtn = makeStyles({
  logoutButton: {
    border: 'none',
    background: 'none',
    textAlign: 'left',
    fontWeight: 'bold',
    color: constants.backgroundButtonDefault,
    outline: 'none',
    cursor: 'pointer',
    padding: '0px',

    '&:hover': {
      color: constants.backgroundButtonHover
    },

    '&:active': {
      color: constants.backgroundButtonActive
    }
  }
});

export default stylesLogoutBtn;
