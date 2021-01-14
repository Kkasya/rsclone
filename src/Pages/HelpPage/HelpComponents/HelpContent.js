import React, { useState, useEffect } from 'react';
import helpStyles from '../HelpStyles';
import Pagination from './HelpPaginationButtons';

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
  const classes = helpStyles();
  const url = '/assets/json/HelpCardsDescription.json';

  const [data, setData] = useState([]);
  let cardRender = '';

  useEffect(() => {
    async function fetchData() {
      let pages = getCards(url);
      pages.then((pageData) => {
        cardRender = <Pagination data={pageData} pageNumber={1} />;
        setData(cardRender);
      })
    }
    fetchData();
  }, []);

  return (
    <div id='helpContainer' className={classes.helpContainer}>
      {data}
    </div>
  )
}