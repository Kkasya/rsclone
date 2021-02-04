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
    background: constants.backgroundColorMain,
    backgroundSize: 'cover',
  },

  containerGame: {
    background: `${constants.backgroundColorMainGame}`,
  },

  containerHeader: {
    position: 'relative',
    padding: '0 40px',
    minHeight: `${constants.minHeaderHeight}px`,

    justifyContent: 'space-between',
    background: constants.backgroundColorHeader,
    backgroundSize: 'cover',
    boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, .5)',
  },

  containerPage: {
    borderRadius: '.8rem',
    backgroundColor: 'rgba(242, 242, 167, 0.3)',
    boxShadow: '2px 2px 8px 0px rgba(0, 0, 0, 0.6)',
    padding: '15px',
  },

  containerPageCenter: {
    margin: 'auto',
    padding: '20px',
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
