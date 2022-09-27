//Faixa de preço
//Criar um ARRAY DE OBJETOS de faixa de preço para que ela possa ser usado em um site igual ao mercado livre.

//Primeira opção
let faixas = [
  {tooltip: 'até R$700', minimo: 0, maximo: 700},
  {tooltip: 'de R$700 a R$1000', minimo: 700, maximo: 1000},
  {tooltip: 'R$1000 ou mais', minimo: 1000, maximo: 99999},
];

////////////////////////////////////////////////////////////////////////////////////////////////////

//Segunda opção (factory function)
function criarFaixaPreco(tooltip,minimo,maximo){
   return {
    tooltip,
    minimo,
    maximo
   }
}

let faixas2 = [
    criarFaixaPreco('até R$700',1,100),
    criarFaixaPreco('de R$700 a R$1000',100,1000),
    criarFaixaPreco('R$1000 ou mais',1000,10000),
]

////////////////////////////////////////////////////////////////////////////////////////////////////

//Terceira opção (constructor function)

function FaixaPreco(tooltip,minimo,maximo){
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}

let faixas3 = [
  new FaixaPreco('até R$700',1,100),
  new FaixaPreco('de R$700 a R$1000',1,100),
  new FaixaPreco('R$1000 ou mais',1,100),
]

console.log(faixas);
console.log(faixas2);
console.log(faixas3)