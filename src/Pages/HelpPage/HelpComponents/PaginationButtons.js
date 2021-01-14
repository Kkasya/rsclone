// import { Button } from '@material-ui/core';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import helpStyles from '../HelpStyles';
// import craetePage from './HelpElements';
// import stylesCommon from '../../../common/styles/stylesCommon';

// function getNextHelpPage() {
//   let pageNumber = document.getElementById('page-number').getAttribute('page-number');
//   let pageRender = createPages(helpDescription, ++pageNumber);
//   ReactDOM.render(pageRender, document.getElementById('helpContainer'));
// }

// function getBackHelpPage() {
//   let pageNumber = document.getElementById('page-number').getAttribute('page-number');
//   let pageRender = createPages(helpDescription, --pageNumber);
//   ReactDOM.render(pageRender, document.getElementById('helpContainer'));
// }

// export default function PaginationButtons(props) {
//   let classes = helpStyles();
//   let commonStyles = stylesCommon();
//   const buttonAndDisabled = `${commonStyles.button} ${commonStyles.buttonDisabled}`;

//   return (
//     <div className={classes.pagination_container} key={'pagination_container'}>
//       <Button
//         className={props.isPagination ? props.isLeftDisabled ? buttonAndDisabled : commonStyles.button : commonStyles.buttonHide}
//         disabled={props.isLeftDisabled}
//         onClick={getBackHelpPage}
//       >
//         <img src='./assets/icons/paginationArrow.png' alt='left arrow' className={classes.leftArrow} />
//       </Button>
//       <div className={classes.pagination_NumberContainer} id='page-number' page-number={props.pageNumber}>Page {pageNumber}</div>
//       <Button
//         className={props.isPagination ? props.isRightDisabled ? buttonAndDisabled : commonStyles.button : commonStyles.buttonHide}
//         disabled={props.isRightDisabled}
//         onClick={getNextHelpPage}
//       >
//         <img src='./assets/icons/paginationArrow.png' alt='right arrow' />
//       </Button>
//     </div>
//   )
// }