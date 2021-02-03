import { makeStyles } from '@material-ui/core/styles';
import constants from '../../common/styles/constants';

const helpCardStyles = makeStyles({
  helpContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: '2em',
    justifyContent: 'space-between'
  },

  helpCard: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '0.5em',
  },

  helpCard_title: {
    textAlign: 'left',
    fontWeight: 'bold',
    color: constants.backgroundButtonDefault,
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
    color: constants.backgroundButtonDefault,
  }
});

export default helpCardStyles;