/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  let total = 0
  //Bucle para las pizzas
if (pizza === 'Margherita') {
  total = total + 7
}else if(pizza === 'Caprese'){
   total = total + 9
}else if (pizza === 'Formaggio'){
   total = total + 10
}
//Bucle para los extras
  for(let i in extras){
    if (extras[i] === 'ExtraSauce'){
      total = total + 1
    }else if (extras[i] === 'ExtraToppings'){
      total = total + 2
    }
  }

  //Return del total 
  return total
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  let total = 0
  
  for (const order of pizzaOrders) {
  // order es un objeto pizzaOrder
     total = total + pizzaPrice(order.pizza, ...order.extras)
  }

  return total
}