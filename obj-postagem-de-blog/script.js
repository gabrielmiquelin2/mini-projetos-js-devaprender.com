//Objeto postagem de blog
//Crie um objeto postagem de blog que vai conter as seguintes propriedades:
//postagem
/*
titulo
mensagem
autor
vizualizações
comentários
    (autor,mensagem)
estaAoVivo
*/

let postagem = {
   título: "Sobre JS",
   mensagem: "Bem vindo",
   autor: "Gabriel",
   vizualizacao: 133,
   cometarios:  [
     {autor: 'Lia', mensagem: 'Oie'},
     {autor: 'Luca', mensagem: 'Salve'}
   ],
   estaAoVivo: false
}
console.log(postagem)