
// 7. Crea una función que valide cuántas vocales tiene el msg entregado.

let msg = "A continuación le estoy entregando una cadena de texto que servirá como texto guía para realizar los siguientes ejercicios . "

//numero de vocales
let numeroVocales = msg.match(/[aeiou]/gi).length;

console.log(numeroVocales);

