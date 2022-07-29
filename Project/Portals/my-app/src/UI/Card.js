import React from 'react';
import classes from './Card.module.css';
// `template literal`
// props.clasname isme jo incoming prop hoogi jaha hamne card use kara hai
// agar ham props.classname nhi use karnege to ye jo card ke andar jo bhi declared hai
// div form and more ye work nhi karnega
const Card = (props) => {
  return <div className={`${classes.card} ${props.className}`}>{props.children}</div>;
};

export default Card;