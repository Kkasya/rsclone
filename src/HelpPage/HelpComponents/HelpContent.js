import React, { useState, useEffect } from 'react';
import HelpElements from './HelpElements';

function getCards(urlPath) {
  return fetch(urlPath)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response.json);
    })
    .catch((answer) => alert("Something went wrong! Error: " + answer.statusText));
}

export default function HelpContent() {
  const url = '/assets/json/HelpCardsDescription.json';

  const [data, setData] = useState({});
  let cardRender = '';

  useEffect(() => {
    async function fetchData() {
      let pages = getCards(url);
      pages.then((pageData) => {
        cardRender = Object.values(pageData).map((page) => {
          let cardElement = page.map((card) => {
            return < HelpElements helpCard={card} />
          })
          return cardElement;
        })
        setData(cardRender);
      })
    }

    fetchData();
  }, [data]);

  return (
    <div>
      {Object.values(data).map((cards) => {
        return cards;
      })}
    </div>
  )
}