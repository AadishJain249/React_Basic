import React from 'react';
import Card from './Card';
import Button from './Button';
import reactdom from 'react-dom';
import classes from './ErrorModal.module.css';
const Overlay=(props)=>{
  return(
  <Card className={classes.modal}>
  <header className={classes.header}>
    <h2>{props.title}</h2>
  </header>
  <div className={classes.content}>
    <p>{props.message}</p>
  </div>
  <footer className={classes.actions}>
    <Button onClick={props.onConfirm}>Okay</Button>
  </footer>
</Card>
)

}
const Backdrop=(props)=>{
  return <div className={classes.backdrop} onClick={props.onConfirm} />
}
const ErrorModal = (props) => {
  
  return (
    <React.Fragment>
      {/* <createPortal take 2 portals one is react node which is to be rendered */}
      {/* {second arg is pointer container jha render karana hai} */}
      {/* {<reactdom.createPortal(<Backdrop onConfirm={props.onClick}/>,document.getElementById('backdrop'))} */}
      {reactdom.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById('backdrop')
      )}
      {reactdom.createPortal(<Overlay title={props.title} message={props.message} onConfirm={props.onConfirm}/>,document.getElementById('overlay'))}
</React.Fragment>
  );  
};

export default ErrorModal;