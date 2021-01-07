import { makeStyles } from "@material-ui/core";

const styles = makeStyles({
  navbar: {
    display: 'flex',
    backgroundColor: 'aqua',

    '& li': {
      'list-style': 'none',
      fontSize: '18px',
      marginLeft: '10px',
    },

    '& a': {
      color: '#24292e',
      textDecoration: 'none',
    },

    '& a.activeNavLink': {
      backgroundColor: '#FF8228',
    },
  },

  levelsPage: {
    backgroundColor: 'pink',
  },

  settingsPage: {
    margin: '0 auto',
    padding: '30px',
    width: '200px',
    minHeight: '300px',

    justifyContent: 'space-between',
    background: 'rgb(225, 225, 225)',
    borderRadius: '8px',
  },

  helpPage: {
    backgroundColor: 'tomato',
  },

  teamPage: {
    backgroundColor: 'red',
  },

  startPage: {
    backgroundColor: 'blue',
  },
});

export default styles;
