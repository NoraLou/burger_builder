import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button'


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
      <p><strong>Total Price</strong></p>
      <p><strong>{props.totalPrice.toFixed(2)}</strong></p>
      <p> Continue to Checkout? </p>
      <Button btnType="Danger" clicked={props.purchaseCancel}>CANCEL</Button>
      <Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
    </Aux>
  );

}

export default orderSummary;
