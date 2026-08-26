/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(time){
if(time === 0){
  return 'Lasagna is done.'
}else if(time > 0){
  return 'Not done, please wait.'
}else if(time === undefined){
  return 'You forgot to set the timer.'
}
}

export function preparationTime(layers,number = 2){
  return layers.length * number
}

export function quantities(layers){
  let salsa = 0
  let fideos = 0
  
for ( let i = 0; i < layers.length; i++) {
  if (layers[i] === 'sauce') {
    salsa = salsa + 0.2
  }else if (layers[i] === 'noodles'){
    fideos = fideos + 50
  }
  
}
return {noodles: fideos, sauce: salsa}
}

export function addSecretIngredient(friendsList,  myList){
myList.push( friendsList[friendsList.length - 1])
}

export function scaleRecipe(recipe,cantidad){
const porciones = cantidad / 2
  const newrecipe = {} 
    
  for(const resultado in recipe){
    newrecipe[resultado] = recipe[resultado] * porciones
  }
  return newrecipe
}
