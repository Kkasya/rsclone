import { makeStyles } from '@material-ui/core/styles';
import constants from '../../common/styles/constants';

const helpCardStyles = makeStyles({
  helpContainer: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '2em',
    marginTop: '2em',
  },

  helpCard: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '1em',
  },

  helpCard_title: {
    textAlign: 'left',
    fontWeight: 'bold',
    color: constants.backgroundButtonDefault,
  },

  helpCard_description: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: '2em',
  },

  helpCard_img: {
    width: '150px',
    height: '150px',
  },

  helpCard_descriptionText: {
    minWidth: '40em',
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