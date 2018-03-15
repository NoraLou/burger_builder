import React from 'react';
import Aux from '../../../hoc/Aux';


const orderSummary = (props) => {

  const ingredientSummary = Object.keys(props.ingredients).map((key,i) => (
    <li key={key+i}>
      <span style={{textTransform:'capitalize'}}>{key} : {props.ingredients[key]}</span>
    </li>
  ))

  return (
    <Aux>
      <h3>Your Order</h3>
      <ul>
        {ingredientSummary}
      </ul>
      <p> Continue to Checkout? </p>
    </Aux>
  )

}

export default orderSummary;
