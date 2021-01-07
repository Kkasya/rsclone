import {makeStyles} from "@material-ui/core";

export const styles = makeStyles({
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

  flexInlineItems: {
    margin: '2rem',
    display: 'flex',
    'justify-items': 'center',
    'align-items': 'center',
  },

  flexBtns: {
    display: 'flex',
    'justify-content': 'space-around',
  },

  btn: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    'border-radius': '1rem',
    outline: 'none',
    color: 'white',
    boxShadow: '0 0.3rem 0.5rem 0.1rem rgba(0, 0, 0, .3)',
    '&:hover': {
      opacity: '0.8',
    },
  },
});


