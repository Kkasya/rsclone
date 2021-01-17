import { makeStyles } from '@material-ui/core/styles';
import constants from '../../common/styles/constants';

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
      padding: '5px 10px',
      backgroundColor: constants.backgroundButtonDefault,
    },
  },
  button_form: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

export default loginStyles;