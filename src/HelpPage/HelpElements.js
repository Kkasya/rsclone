import React from 'react';
import helpStyles from './HelpStyles';

export default function HelpElements(props) {
  const classes = helpStyles();

  return (
    <div className={classes.helpCard} key={props.helpCard.title}>
      <div className={classes.helpCard_title} key='title'>{props.helpCard.title}</div>
      <div className={classes.helpCard_description} key='description'>
        <img src={props.helpCard.imgUrl} alt={props.helpCard.title} className={classes.helpCard_img} />
        <div>{props.helpCard.description}</div>
      </div>
    </div>
  )

  // const e = React.createElement;
  // return (
  //   e('div', { className: classes.helpCard, key: props.helpCard.title }, [
  //     e('div', { className: classes.helpCard_title, key: String.prototype.concat(props.helpCard.title, "_card") }, []),
  //     e('div', { className: classes.helpCard_description, key: String.prototype.concat(props.helpCard.title, "_desc") }, [
  //       e('img', { src: props.helpCard.imgUrl, alt: props.helpCard.title, className: classes.helpCard_img, key: String.prototype.concat(props.helpCard.title, "_img") }, []),
  //       e('p', { key: String.prototype.concat(props.helpCard.title, "_p") }, [])
  //     ]),
  //   ])
  // )
}