import React from 'react';
import helpStyles from './HelpStyles';

const e = React.createElement;


export default function helpCard(props) {
  const classes = helpStyles();
  return (
    e('div', { className: classes.helpCard }, [
      e('div', { className: classes.helpCard_title }, []),
      e('div', { className: classes.helpCard_description }, [
        e('img', { src: props.helpCard.img, alt: props.helpCard.title, className: classes.helpCard_img }, []),
        e('p', {}, [])
      ]),
    ])
  )
}


  // <div className={classes.helpCard}>
  //   <div className={classes.helpCard_title}>{props.helpCard.title}</div>
  //   <div className={classes.helpCard_description}>
  //     <img src={props.helpCard.img} alt={props.helpCard.title} className={classes.helpCard_img} />
  //     <p>{props.helpCard.img}</p>
  //   </div>
  // </div>