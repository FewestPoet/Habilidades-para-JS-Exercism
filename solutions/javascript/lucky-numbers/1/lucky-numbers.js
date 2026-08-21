// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
let matriz1 = array1.join("")
  let matriz2 = array2.join("")

      let conversion = Number(matriz1)
  let conversion2 = Number(matriz2)
  
  return conversion + conversion2
  
  }
/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let valor = String(value)
 let conversion = valor.split("")
  conversion.reverse()
 let resultado  = conversion.join("")
  
  if(Number(resultado) === value){
    return true
  }else{
    return false
  }
   
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
 
 
if (!input) {
  return 'Required field'
} if (!Number(input)) {
  return 'Must be a number besides 0'
}if(input === input)
  return ""
}