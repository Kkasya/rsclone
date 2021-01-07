import {makeStyles} from "@material-ui/core";

export const styles = makeStyles({
  pageWrapper: {
    background: 'linear-gradient(45deg, rgba(152, 207, 195, 0.5), rgba(86, 181, 184, 0.5))',
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


