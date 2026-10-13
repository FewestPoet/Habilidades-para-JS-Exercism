// @ts-check

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export function seeingDouble(deck) {
 const newarray = deck.map((deck) => deck * 2)
  return newarray
}

/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with triplicate 3s
 */
export function threeOfEachThree(deck) {
   return deck.reduce((accumulator, currentValue) => {
     if (currentValue === 3){
       accumulator.push(3,3,3)
     }else{
       accumulator.push(currentValue)
     }
     return accumulator
   }, [])
}

/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */
export function middleTwo(deck) {
 const [, , , , carta5,carta6] = deck
  return [carta5,carta6]
  //return deck.slice(4,6)
}

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @returns {number[]} transformed deck
 */

export function sandwichTrick(deck) {
if (deck.length % 2 === 0){
  
  const primeramitad = deck.slice(0,deck.length / 2) 
const segundamitad = deck.slice(deck.length / 2)
  
  const [primervalor, ...valorrestante] = primeramitad
 const [ultimovalor, ...restante] = segundamitad.reverse()
  restante.reverse()
  return [...valorrestante,ultimovalor,primervalor,...restante]
}
}
/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */
export function twoIsSpecial(deck) {
 const decknuevo = deck.filter((deck)=> deck === 2)
  return decknuevo
}

/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */
export function perfectlyOrdered(deck) {
  return deck.sort((a,b)=> a - b) 
}

/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */
export function reorder(deck) {
 return deck.reverse()
}
