
import { makeStyles } from '@material-ui/core';
import constants from '../../common/styles/constants';

const stylesNavCustom = makeStyles({
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
});

export default stylesNavCustom;
