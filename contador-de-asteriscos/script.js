//Criar uma função que exibe a quantidade de (*) que aquela linha possui


//PRIMEIRA FORMA DE FAZER(forma mais simples)

exibirAsteriscos(50);
function exibirAsteriscos(linhas){
  // let padrao = "";
  // for(let linha = 1; linha <= linhas; linha++){
  //   padrao += "*";
  //     console.log(padrao)
  // }

 //UTILIZANDO  MAIS DE UM LOOP

  for(let linha = 1; linha <= linhas; linha++){
    let padrao = "";
    for (let i = 0; i < linha; i++){
       padrao += "*";
    }
    console.log(padrao)
  }

}