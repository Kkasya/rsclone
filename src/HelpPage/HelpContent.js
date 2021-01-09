import React from 'react';
import HelpElements from './HelpElements';

async function getCards(urlPath) {
  return fetch(urlPath)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response.json);
    })
    .catch((answer) => alert("Something went wrong! Error: " + answer.statusText));
}

export default async function HelpContent() {
  const url = '/assets/json/HelpCardsDescription.json';
  let pages = await getCards(url);

  let cardsRender = Object.values(pages).map((page) => {
    page.map((card) => {
      return (
        < HelpElements helpCard={card} />
      )
    })
  });

  return (cardsRender);
}