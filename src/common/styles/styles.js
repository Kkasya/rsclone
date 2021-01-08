import { makeStyles } from '@material-ui/core';
import constants from './constants';

const footerHeight = Math.max(constants.minFooterHeight, constants.logoSizes);

const styles = makeStyles({
  root: {
    '& nav': {
      padding: '0 40px',
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, .5)',
      color: constants.fontColorPrimary,
    },

    '& a': {
      '& img': {
        display: 'flex',
      },
    },

    '& a.activeNavLink': {
      '& button': {
        backgroundColor: constants.backgroundButtonActive,
      },
    },
  },

  pageWrapper: {
    background: 'linear-gradient(45deg, rgba(152, 207, 195, 0.5), rgba(86, 181, 184, 0.5))',
    textAlign: 'center',
    fontSize: '10px',
  },

  invis: {
    display: 'none',
  },

  navbar: {
    '& ul': {
      display: 'flex',
      paddingInlineStart: 0,
    },

    '& li': {
      marginRight: '20px',
      display: 'flex',
      alignItems: 'center',
      listStyle: 'none',

      '&:last-child': {
        marginRight: '0',
      },
    },

    '& a': {
      color: constants.fontColorPrimary,
      textDecoration: 'none',
    },
  },

  navbarOnStart: {
    boxShadow: 'none !important',
    '& ul': {
      flexDirection: 'column',
    },

    '& li': {
      marginRight: 0,
    },
  },

  container: {
    padding: '0 40px',
    minHeight: `calc(100vh - ${footerHeight}px)`,

    display: 'flex',
    backgroundColor: constants.backgroundColorMain,
  },

  containerHeader: {
    padding: 0,
    minHeight: `${constants.minFooterHeight}px`,
    backgroundColor: constants.backgroundColorHeader,
  },

  containerPage: {
    margin: '0 auto',
    paddingTop: '20vh',
  },

  button: {
    fontSize: '16px',
    backgroundColor: constants.backgroundButtonDefault,

    '&:hover': {
      backgroundColor: constants.backgroundButtonHover,
    },
  },

  buttonBig: {
    marginBottom: '30px',
    width: '240px',
    height: '45px',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  startPage: {

  },

  levelsPage: {

  },

  settingsPage: {
    alignItems: 'center',
  },

  settingsCheckboxes: {
    marginBottom: '30px',
    display: 'flex',
    flexDirection: 'column',
  },

  helpPage: {

  },

  teamPage: {

  },

  flexWrapper: {
    display: 'flex',
    'flex-flow': 'column wrap',
  },

  flexInlineItems: {
    margin: '2rem',
    display: 'flex',
    'justify-items': 'center',
    'align-items': 'center',
  },

  flexBtns: {
    display: 'flex',
    'justify-content': 'space-around',
  },

  btn: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    'border-radius': '1rem',
    outline: 'none',
    color: 'white',
    boxShadow: '0 0.3rem 0.5rem 0.1rem rgba(0, 0, 0, .3)',
    
    '&:hover': {
      opacity: '0.8',
    },
  },
});

export default styles;
