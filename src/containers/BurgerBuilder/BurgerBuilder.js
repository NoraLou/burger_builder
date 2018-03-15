import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}


class BurgerBuilder extends Component {

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    disableOrder: true,
    inPurchaseState: false
  }

  addIngredientHandler = (type) => {
    console.log("add Ingredient :", type)
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updateIngredients = {
      ...this.state.ingredients
    };
    updateIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = priceAddition + oldPrice;
    const isReadyToOrder = this.isDisabledOrder(updateIngredients);

    this.setState(()=> ({
      totalPrice : newPrice,
      ingredients : updateIngredients,
      disableOrder : isReadyToOrder
    }))
  }

  purchaseHandler = (e) => {
      this.setState(()=> ({
        inPurchaseState : true,
    }))
  }

  removeIngredientHandler = (type) => {

    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0){
      return;
    }
    const updatedCount = oldCount - 1;
    const updateIngredients = {
      ...this.state.ingredients
    };
    updateIngredients[type] = updatedCount;

    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    const isReadyToOrder = this.isDisabledOrder(updateIngredients);

    this.setState(()=> ({
      totalPrice : newPrice,
      ingredients : updateIngredients,
      disableOrder : isReadyToOrder
    }))
  }

  isDisabledOrder = (ingredients) => {
    for (let key in ingredients) {
      if (ingredients[key] > 0){
        return false
      }
    }
    return true
  }


  render() {

    const disabledChoices = { ...this.state.ingredients};

    for (let key in disabledChoices) {
      disabledChoices[key] = disabledChoices[key] <= 0
    }

    const { ingredients, totalPrice, disableOrder, inPurchaseState } = this.state;

    return (
      <Aux>
        <Burger ingredients={ingredients}/>
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabledChoices={disabledChoices}
          totalPrice={totalPrice}
          readyToOrder={disableOrder}/>
        <Modal show={inPurchaseState}>
          <OrderSummary ingredients={ingredients}/>
        </Modal>
      </Aux>
    )
  }
}

export default BurgerBuilder;
