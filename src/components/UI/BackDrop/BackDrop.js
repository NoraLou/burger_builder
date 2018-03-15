import React from 'react';
import classes from './BackDrop.css';

const backdrop = (props) => {

  return props.show ? <div className={classes.Backdrop} onClick={props.modalClose}></div> : null
}

export default backdrop;
