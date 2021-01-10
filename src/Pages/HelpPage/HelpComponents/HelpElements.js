import React from 'react';
import helpStyles from './HelpStyles';

export default function HelpElements(props) {
  const classes = helpStyles();

  return (
    <div className={classes.helpCard} key={props.helpCard.title}>
      <div className={classes.helpCard_title} key='title'>{props.helpCard.title}</div>
      <div className={classes.helpCard_description} key='description'>
        <img src={props.helpCard.imgUrl} alt={props.helpCard.title} className={classes.helpCard_img} />
        <div className={classes.helpCard_descriptionText}>{props.helpCard.description}</div>
      </div>
    </div>
  )
}