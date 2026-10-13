//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


export function format(nombre,numero,terminacion){
  const operacion = numero % 10
  
 if (numero % 100 === 11 ||numero % 100 === 12 ||numero % 100 === 13) {
   terminacion = 'th'

 }else if(operacion === 1){
  terminacion = 'st'
  
}else if(operacion === 2){
   terminacion = 'nd'
  
}else if(operacion === 3){
   terminacion = 'rd'
  
}else{
terminacion = 'th'
  
}
  
return `${nombre}, you are the ${numero}${terminacion} customer we serve today. Thank you!`
  
}
