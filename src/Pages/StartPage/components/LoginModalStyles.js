import { makeStyles } from '@material-ui/core/styles';

const loginStyles = makeStyles({
  modal_container: {
    position: 'fixed',
    top: '0',
    bottom: '0',
    right: '0',
    left: '0',
    overflow: 'hidden',
    overflowY: 'auto',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '99',


    '&.hidden': {
      display: 'none',
    }
  },
  modal_window: {
    margin: '0 auto',
    width: '60vw',
    height: '50vh',
    zIndex: '10',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: '4px!important',
    backgroundColor: '#FFBA5F!important',
    textAlign: 'center',
    position: 'relative',
  },
  cross_button: {
    position: 'absolute',
    top: '0px',
    right: '0px',
    margin: '10px 10px 0px 0px',

    '& img': {
      width: '40px',
      height: '40px',
    }
  },

  button_google: {
    minWidth: '150px',
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