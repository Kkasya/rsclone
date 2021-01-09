import { makeStyles } from "@material-ui/core";

const styles = makeStyles({
  pageWrapper: {
    background: 'linear-gradient(45deg, rgba(152, 207, 195, 0.5), rgba(86, 181, 184, 0.5))',
    textAlign: 'center',
    fontSize: '10px',
    '& a': {
      textDecoration: 'none',
    },
  },

  flexWrapper: {
    display: 'flex',
    'flex-flow': 'column wrap',
  },

  flexWrapperRow: {
    display: 'flex',
    'flex-flow': 'row wrap',
    justifyContent: 'center',
  },

  flexInlineItems: {
    margin: '0.3rem',
    display: 'flex',
    flexDirection: 'row',
    'justify-items': 'center',
    'align-items': 'center',
  },

  flexBtns: {
    display: 'flex',
    'justify-content': 'space-around',
  },
});

export default styles;
