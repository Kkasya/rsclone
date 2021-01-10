import { makeStyles } from '@material-ui/core';

const stylesNav = makeStyles({
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
  },
});

export default stylesNav;
