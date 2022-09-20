//Receber uma quantidade de valores para avaliar
//Função exibe se cada valor é par ou ímpar

exibirTipo(1000)
function exibirTipo(limite){
  for (let i = 0; i <= limite; i++){
    if (i % 2 === 0)
       console.log(i,"PAR");
    else
       console.log(i, "ÍMPAR");   
  }
}