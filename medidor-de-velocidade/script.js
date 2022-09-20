//Medidor de velociadade (Mesma lógica de um radar de trânsito)
//A cada 5km do limite ganha um ponto na carteira
//Casos os pontos sejam maior que 12 pontos => "Carteira Suspendida"

verficarVelocidade(130);

function verficarVelocidade(velocidade){
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;

    if(velocidade <= velocidadeMaxima)
        console.log("Ok");
    else{
      const pontos = Math.floor(((velocidade - velocidadeMaxima) / kmPorPonto));//Math.floor -> arredonda números
      if(pontos >= 12){
          console.log("Carteira Suspensa");
      }else
          console.log("Pontos", pontos);
    }  
}