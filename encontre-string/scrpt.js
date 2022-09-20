//Criar um método para ler propriedades de um objeto e exibir somente as propridades do tipo string que estão nesse objeto.

const filme = {
  titulo:"Batman",
  ano:2005,
  diretor:"Gabriel",
  personagem:"Bruce"
}
exibirPropriedades(filme);
function exibirPropriedades(obj){
     for (prop in obj)
         if(typeof obj[prop] === 'string')
            console.log(prop,obj[prop])
}

