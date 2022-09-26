//Objeto endereço

//Criar um objeto enderço que contem 
//Rua
//Cidade
//Cep
//exibirEndereco(endereco)


let endereco = {
 Cidade: "Maringá",
 Rua: "Lago Dourada",
 Cep: 87160-000
}
 
function exibirEndereco(endereco){
    for (let chave in endereco)
         console.log(chave,endereco,[chave]);
}
exibirEndereco(endereco);

