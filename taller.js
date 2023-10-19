let msg = "A continuación le estoy entregando una cadena de texto que servirá como texto guía para realizar los siguientes ejercicios . "

// 1. ¿Qué método utiliza para saber la cantidad de caracteres?
// Imprima el resultado

let longitud = 0;
for (let i = 0; i < msg.length; i++) {
    longitud++;
}
console.log("La longitud es: " + longitud);


// 2. Convierta la cadena de texto entregada a minúsculas e imprima por consola la salida.

let lowercaseMsg1 = msg.toLowerCase();
console.log(lowercaseMsg1);


// 3. Si la cadena contiene la palabra filtro en algú lado imprima un mensaje por consola con el valor true.

if (msg.includes("filtro")) {
  console.log(true);
} else {
  console.log(false);
}

// 4. Extrae la palabra "ejercicios" del mensaje entregado.
// imprime por consola

function extractWord(text, targetWord) {
  let words = text.split(" ");
  for (let word of words) {
    if (word === targetWord) {
      return word;
    }
  }
  return "";
}
let word5 = extractWord(msg, "ejercicios");
console.log(word5);
