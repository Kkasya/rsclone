import {makeStyles} from "@material-ui/core";

export const styles = makeStyles({
  pageBackground: {
    background: 'linear-gradient(45deg, rgba(152, 207, 195, 0.5), rgba(86, 181, 184, 0.5))',
  },

  flexWrapper: {
    display: 'flex',
    'flex-flow': 'column wrap',
    height: '100vh',
  },

  flexWrapperRow: {
    display: 'flex',
    'flex-flow': 'row wrap',
    justifyContent: 'center',
  },

  flexInlineItems: {
    margin: '3rem',
    display: 'flex',
    'justify-items': 'center',
    'align-items': 'center',
  },

  flexBtns: {
    display: 'flex',
    'justify-content': 'space-around',
  },
});


