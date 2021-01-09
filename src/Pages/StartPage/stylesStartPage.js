import { makeStyles } from '@material-ui/core';

const stylesStartPage = makeStyles({
  navbarOnStart: {
    boxShadow: 'none !important',
    '& ul': {
      flexDirection: 'column',
    },

    '& li': {
      marginRight: 0,
    },
  },
});

export default stylesStartPage;
