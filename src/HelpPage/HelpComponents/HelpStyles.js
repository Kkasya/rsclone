import { makeStyles } from '@material-ui/core/styles';
import constants from '../../common/styles/constants';

const helpCardStyles = makeStyles({
  helpCard: {
    display: 'flex',
    flexDirection: 'column',
  },
  helpCard_title: {
    textAlign: 'left',
    fontWeight: 'bold',
    color: constants.backgroundButtonDefault
  },
  helpCard_description: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: '2em'
  },
  helpCard_img: {
    width: '400px',
    height: '400px'
  }
});

export default helpCardStyles;