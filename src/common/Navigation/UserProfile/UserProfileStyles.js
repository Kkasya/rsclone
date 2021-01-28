import { makeStyles } from '@material-ui/core';
import constants from '../../styles/constants';

const stylesUserProfile = makeStyles({
  userProfile_container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    columnGap: '1em',
    padding: '10px'
  },
  userAvatar: {
    maxWidth: '55px',
    maxHeight: '55px',
    borderRadius: '50%',
    overflow: 'hidden',

    '& img': {
      width: '100%',
      height: '100%',
    }
  },
  userNameANdLogout: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'left',
    rowGap: '0.3em'
  },
  userName: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    fontWeight: 'bold',
    columnGap: '0.3em'
  },
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

export default stylesUserProfile;
