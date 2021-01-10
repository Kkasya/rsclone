import { makeStyles } from '@material-ui/core';

const stylesNav = makeStyles({
  nav: {
    display: 'flex',
    alignItems: 'center',
  },

  list: {
    margin: 0,
    padding: 0,

    '& li': {
      listStyle: 'none',
    },

    '& li:last-child': {
      margin: 0,
    },
  },

  listInNavbar: {
    display: 'flex',

    '& li': {
      marginRight: '20px',
    },
  },

  listOnStart: {
    '& li': {
      marginBottom: '30px',
    },
  },
});

export default stylesNav;
