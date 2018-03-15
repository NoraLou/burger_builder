import React from 'react';
import classes from './Modal.css';

const modal = (props) => (
  <div className={classes.Modal}
    style={{
      transform: props.show ? 'traslateY(0)' : 'traslateY(-100vh)',
      opacity: props.show ? '1':'0'
    }}>
    {props.children}
  </div>
);

export default modal;
