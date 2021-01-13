import { Button } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import helpStyles from '../HelpStyles';
import HelpElements from './HelpElements';
import stylesCommon from '../../../common/styles/stylesCommon';

let helpDescription = '';
let classes = '';
let commonStyles = '';

function getPageCard(page) {
  let id = 0;
  let cardElement = page.map((card) => {
    id++;
    return < HelpElements helpCard={card} key={String.prototype.concat('helpCard', id)} />
  })
  return cardElement;
}


function createPages(pages, pageNumber) {
  let pageRender = '';
  const pageCount = Object.values(pages).length;
  const pageElementName = 'page'.concat(pageNumber - 1);

  if (pageCount <= 0) {
    pageRender = <div>There is no help description!</div>
  } else if (pageCount === 1) {
    pageRender = getPageCard(pages.page0);
    pageRender.push(createButton(true, true, 1, false));
  } else {
    pageRender = getPageCard(pages[pageElementName]);
    if (pageNumber === pageCount) {
      pageRender.push(createButton(false, true, pageNumber, true));
    } else if (pageNumber === 1) {
      pageRender.push(createButton(true, false, pageNumber, true));
    } else {
      pageRender.push(createButton(false, false, pageNumber, true));
    }
  }

  return (pageRender);
}

function getNextHelpPage() {
  let pageNumber = document.getElementById('page-number').getAttribute('page-number');
  let pageRender = createPages(helpDescription, ++pageNumber);
  ReactDOM.render(pageRender, document.getElementById('helpContainer'));
}

function getBackHelpPage() {
  let pageNumber = document.getElementById('page-number').getAttribute('page-number');
  let pageRender = createPages(helpDescription, --pageNumber);
  ReactDOM.render(pageRender, document.getElementById('helpContainer'));
}

function createButton(isLeftDisabled, isRightDisabled, pageNumber, isPagination) {
  const buttonAndDisabled = `${commonStyles.button} ${commonStyles.buttonDisabled}`;
  return (
    <div className={classes.pagination_container} key={'pagination_container'}>
      <Button
        className={isPagination ? isLeftDisabled ? buttonAndDisabled : commonStyles.button : commonStyles.buttonHide}
        disabled={isLeftDisabled}
        onClick={getBackHelpPage}
      >
        <img src='./assets/icons/paginationArrow.png' alt='left arrow' className={classes.leftArrow} />
      </Button>
      <div className={classes.pagination_NumberContainer} id='page-number' page-number={pageNumber}>Page {pageNumber}</div>
      <Button
        className={isPagination ? isRightDisabled ? buttonAndDisabled : commonStyles.button : commonStyles.buttonHide}
        disabled={isRightDisabled}
        onClick={getNextHelpPage}
      >
        <img src='./assets/icons/paginationArrow.png' alt='right arrow' />
      </Button>
    </div>
  )
}

export default function Pagination(props) {
  helpDescription = props.data;
  classes = helpStyles();
  commonStyles = stylesCommon();

  return (
    createPages(helpDescription, props.pageNumber)
  )
}