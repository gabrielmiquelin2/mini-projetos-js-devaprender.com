//Exercício consiste em pegar valores de UMA variável e subsitituir um com o outro.
//Ou seja fazer que apereca no console primerio "azul" e depois "vermelho"

let a = "vermelho";
let b = "azul"

let c = a;
a = b;
b = c;

console.log(a);
console.log(b)