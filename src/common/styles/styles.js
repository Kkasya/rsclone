import { makeStyles } from "@material-ui/core";

const styles = makeStyles({
  navbar: {
    display: 'flex',
    backgroundColor: 'aqua',

    '& li': {
      listStyle: 'none',
      fontSize: '18px',
    },

    '& a': {
      color: '#24292e',
      textDecoration: 'none',
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
});

export default styles;
