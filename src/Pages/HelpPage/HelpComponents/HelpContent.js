import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import helpStyles from '../HelpStyles';
import HelpCards from './HelpCards';
import stylesCommon from '../../../common/styles/stylesCommon';
import { toggleSetting } from '../../../redux/actions';
import { connect } from 'react-redux';

let pageNumber = 1;

function getCardsArray(urlPath) {
  return fetch(urlPath)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response.json);
    })
    .catch((answer) => alert("Something went wrong! Error: " + answer.statusText));
}

function HelpContent({settings}) {
  const classes = helpStyles();
  let commonStyles = stylesCommon();
  const url = '/assets/json/HelpCardsDescription.json';

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      let pages = getCardsArray(url);
      pages.then((pageData) => {
        setData(pageData);
      })
    }
    fetchData();
    setPage(pageNumber);
  }, []);

  const isShowBySetting = settings[0].state;
  const srcPressButton = `/assets/sounds/press1.mp3`;
  const audioPressButton = new Audio(srcPressButton);
  const playPress  = () => {
    if (isShowBySetting) {
      audioPressButton.play();
    }
  }

  const countPages = Object.keys(data).length;

  const changePage = (e) => {
    playPress();
    const buttonType = e.currentTarget.getAttribute('aria-label');
    buttonType === 'left' ? --pageNumber : ++pageNumber;
    setPage(pageNumber);
  }

  const createPaginationButtons = (isLeftDisabled, isRightDisabled) => {
    const buttonAndDisabled = `${commonStyles.button} ${commonStyles.buttonDisabled}`;

    return (<div className={classes.pagination_container} key={'pagination_container'}>
      <Button
        className={isLeftDisabled ? buttonAndDisabled : commonStyles.button}
        disabled={isLeftDisabled}
        onClick={changePage}
        aria-label={'left'}
      >
        <img src='./assets/icons/paginationArrow.png' alt='left arrow' className={classes.leftArrow} />
      </Button>
      <div className={classes.pagination_NumberContainer} id='page-number'>Page {pageNumber}</div>
      <Button
        className={isRightDisabled ? buttonAndDisabled : commonStyles.button}
        disabled={isRightDisabled}
        onClick={changePage}
        aria-label={'right'}
      >
        <img src='./assets/icons/paginationArrow.png' alt='right arrow' />
      </Button>
    </div>)
  }

  const createHelpPageWithPaginations = () => {
    let pageRender = [];
    pageRender.push(<HelpCards page={data[pageNumber]} key={'helpCards'} />);

    if (pageNumber === countPages) {
      pageRender.push(createPaginationButtons(false, true));
    } else if (pageNumber === 1) {
      pageRender.push(createPaginationButtons(true, false));
    } else {
      pageRender.push(createPaginationButtons(false, false));
    }

    return pageRender;
  }

  return (
    <div id='helpContainer' className={classes.helpContainer} >
      { countPages === 1 ? <HelpCards page={data[page]} key={'helpCards'} /> :
        countPages > 1 ? createHelpPageWithPaginations()
          : <div> There are no help description card!</div>}
    </div>
  )
}


const mapStateToProps = (state) => ({
  settings: state.settings,
});

const mapDispatchToProps = {
  toggleSetting,
};
export default connect(mapStateToProps, mapDispatchToProps)(HelpContent);
