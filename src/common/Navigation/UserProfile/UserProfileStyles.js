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
    width: '55px',
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
  }
});

export default stylesUserProfile;
