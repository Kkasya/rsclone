import React from 'react';
import styles from '../common/styles/styles';
import HelpElements from './HelpElements';

async function getCards(urlPath) {
  return fetch(urlPath)
    .then((response) => {
      // if (response.ok) {
      return response.json();

      // }
      // return Promise.reject(response);
    })
    .catch((answer) => alert("Something went wrong! Error: " + answer.statusText));
}

export default function HelpPage() {
  const url = '/json/HelpCardsDescription.json';
  let response = getCards(url);
  console.log(response);

  const commonStyles = styles();
  return (
    <div className={commonStyles.helpPage}>
      <h1>HelpPage</h1>
    </div>
  );
}