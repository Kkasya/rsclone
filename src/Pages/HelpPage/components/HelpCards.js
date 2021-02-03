import React from 'react';
import HelpElements from './HelpElements';

function getPageCards(page) {
  let id = 0;
  let cardElement = [];

  if (page) {
    cardElement = page.map((card) => {
      id++;
      return < HelpElements helpCard={card} key={String.prototype.concat('helpCard', id)} />
    })
  }

  return cardElement;
}

export default function HelpCards(props) {
  return (
    getPageCards(props.page)
  )
}