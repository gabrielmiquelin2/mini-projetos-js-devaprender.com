//Criar uma função para mostrar os números primos no console

//Lembrando que número primo é divisivel apenas por 1 ou por ele mesmo

exibirNumerosPirmos(15);

function exibirNumerosPirmos(limite){
      for(let numero = 2 ; numero <= limite; limite++){    
          if (NumeroPrimo(numero)) console.log(numero);
     }
}

function NumeroPrimo(numero){
         for(let divisor = 2; divisor < numero; divisor++){
              if(numero % divisor === 0){
                   return false;  
              }
          }

          return true;
}