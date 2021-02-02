import { makeStyles } from '@material-ui/core';
import constants from './constants';

const logoHeightWithPaddings = constants.logoHeight + 2 * constants.logoPaddings;
const headerHeight = Math.max(constants.minHeaderHeight, logoHeightWithPaddings);

export const stylesCommonObj = {
  root: {
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
    '& *': {
      fontSize: '16px',
      color: constants.fontColorPrimary,
    },

    padding: '0 40px 10vh 40px',
    minHeight: `calc(100vh - ${headerHeight}px)`,

    display: 'flex',
    backgroundColor: constants.backgroundColorMain,
  },

  containerHeader: {
    position: 'relative',
    padding: '0 40px',
    minHeight: `${constants.minHeaderHeight}px`,

    justifyContent: 'space-between',
    backgroundColor: constants.backgroundColorHeader,
    boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, .5)',
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

  containerLevels: {
    paddingTop: '5vh',
    justifyContent: 'center',
  },

  buttonBig: {
    minWidth: '240px',
    minHeight: '45px',
  },

  buttonDisabled: {
    opacity: '0.5',
  },

  buttonHide: {
    display: 'none'
  },
};

const stylesCommon = makeStyles(stylesCommonObj);

export default stylesCommon;
