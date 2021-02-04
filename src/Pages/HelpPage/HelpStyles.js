import { makeStyles } from '@material-ui/core/styles';

const helpCardStyles = makeStyles({
  helpPage: {
    padding: '0 40px',
  },

  helpContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: '15px auto',
    minHeight: '540px',
  },

  helpCard: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '0.5em',
  },

  helpCard_title: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: '20px',
  },

  helpCard_description: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  imgContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
  },

  helpCard_img: {
    maxWidth: '150px',
    maxHeight: '120px',
  },

  helpCard_descriptionText: {
    width: '78%',
  },

  pagination_container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: '1em',
    marginTop: '3em',

    '& img': {
      width: '40px',
      height: '40px',
    },
  },

  leftArrow: {
    transform: 'rotate(180deg)'
  },

  pagination_NumberContainer: {
    textAlign: 'center',
    fontWeight: 'bold',
  }
});

export default helpCardStyles;