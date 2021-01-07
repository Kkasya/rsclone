import { makeStyles } from '@material-ui/core';
import constants from './constants';

const footerHeight = Math.max(constants.minFooterHeight, constants.logoSizes);

export const styles = makeStyles({
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
      fontSize: '18px',

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

  startPage: {

  },

  button: {
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
});

export default styles;
