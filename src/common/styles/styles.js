import {makeStyles} from "@material-ui/core";

export const styles = makeStyles({
  pageBackground: {
    background: 'linear-gradient(45deg, rgb(152, 207, 195), rgb(86, 181, 184))',
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


