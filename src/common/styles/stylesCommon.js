import { makeStyles } from '@material-ui/core';
import constants from './constants';

const logoHeightWithPaddings = constants.logoHeight + 2 * constants.logoPaddings;
const footerHeight = Math.max(constants.minFooterHeight, logoHeightWithPaddings);

const stylesCommon = makeStyles({
  root: {
    '& *': {
      fontSize: '16px',
      color: constants.fontColorPrimary,
    },

    '& nav': {
      padding: '0 40px',
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, .5)',
    },

    '& a': {
      textDecoration: 'none',

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

  logoNav: {
    padding: `${constants.logoPaddings}px 0`,
  },

  invis: {
    display: 'none',
  },

  container: {
    padding: '0 40px 10vh 40px',
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

  containerInlineCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    minWidth: '90px',
    backgroundColor: constants.backgroundButtonDefault,

    '&:hover': {
      backgroundColor: constants.backgroundButtonHover,
    },
  },

  buttonBig: {
    marginBottom: '30px',
    minWidth: '240px',
    minHeight: '45px',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default stylesCommon;
