import {makeStyles} from "@material-ui/core";

export const styles = makeStyles({
  flexWrapper: {
    display: 'flex',
    'flex-flow': 'column wrap',
    height: '100vh',
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


