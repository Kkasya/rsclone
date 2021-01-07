import { makeStyles } from '@material-ui/core';

const footerHeight = `65`;

export const styles = makeStyles({
  root: {
    '& nav': {
      padding: '0 40px',
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, .5)',

      '& ul': {
        // display: 'none',
      },
    }
  },

  invis: {
    display: 'none',
  },

  navbar: {
    display: 'flex',
    paddingInlineStart: 0,

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
      color: '#24292e',
      textDecoration: 'none',
    },
  },
  
  container: {
    padding: '0 40px',
    minHeight: `calc(100vh - ${footerHeight}px)`,

    display: 'flex',
    background: '#B3ECFF',
  },

  containerHeader: {
    padding: 0,
    minHeight: `${footerHeight}px`,
    background: '#33CCFF',
  },

  levelsPage: {

  },

  settingsPage: {
    margin: '0 auto',
    alignItems: 'center',
    justifyContent: 'center',
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
