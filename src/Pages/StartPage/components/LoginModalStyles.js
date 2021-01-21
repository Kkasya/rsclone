import { makeStyles } from '@material-ui/core/styles';
import constants from '../../../common/styles/constants';

const loginStyles = makeStyles({
  login_container: {
    margin: '0 auto',
    paddingTop: '20vh',
  },
  login_form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input_form: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '2em',
    rowGap: '0.5em',

    '& input': {
      borderRadius: '4px',
      padding: '7px 10px',
      backgroundColor: constants.backgroundButtonDefault,
      border: 'solid 2px #3339',
      outline: 'none',
    },
  },
  button_form: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button_login: {
    boxShadow: '0px 2px 0px 0px rgba(34, 60, 80, 0.2)'
  },
  button_google: {
    minWidth: '90px',
    backgroundColor: '#FFBA5F!important',
    outline: 'none',
    borderRadius: '4px!important',
    textTransform: 'uppercase',
  },

  '&:hover': {
    backgroundColor: '#FF9E44!important',
  },
  '& div': {
    backgroundColor: '#FFBA5F!important',
  }
});

export default loginStyles;