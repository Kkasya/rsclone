import {makeStyles} from "@material-ui/core";

const hintBackground = `/assets/images/hint.png`;
const winBackground = `/assets/images/messageWin.png`;
const loosingBackground = `/assets/images/messageLoosing.png`;
const widthModal = 750;
const heightModal = 400;

const stylesGameLevelPage = makeStyles({
  modal: {
    position: "fixed",
    width: `${widthModal}px`,
    height: `${heightModal}px`,
    top: `calc(50% - ${heightModal / 2}px)`,
    left: `calc(50% - ${widthModal / 2}px)`,
    background: `url(${hintBackground})`,
    backgroundSize: "cover",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '30px 20px 40px 30px',
  },

  win: {
    background: `url(${winBackground})`,
    backgroundSize: "cover",
    padding: '70px',
    textAlign: 'center'
  },

  loosing: {
    background: `url(${loosingBackground})`,
    backgroundSize: "cover",
    textAlign: 'center',
    padding: '80px 60px',
  },

  title: {
    textAlign: 'center',
    fontSize: '40px',
    color: 'green',
    margin: 0,
  },

  description: {
    fontSize: '30px',
  },

  btnWrapper: {
    margin: '0 auto',
  },

  btnClose: {
    margin: '0 auto',
    width: '300px',
    boxShadow: '0px 3px 5px 0px rgba(0, 0, 0, .5)',
    color: 'green !important',

    '&>span': {
      fontSize: '30px',
      color: 'green',

      '&:hover': {
        color: 'darkgreen !important'
      },
    },
  }
});

export default stylesGameLevelPage;