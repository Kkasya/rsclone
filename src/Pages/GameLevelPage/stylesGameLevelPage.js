import {makeStyles} from "@material-ui/core";

const hintBackground = `/assets/images/hint.png`;
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

  title: {
    textAlign: 'center',
    fontSize: '40px',
    color: 'green',
    margin: 0,
  },

  description: {
    fontSize: '30px',
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