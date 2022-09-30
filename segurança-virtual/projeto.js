function VerificarEntrada(){
    NomeConvidado = document.getElementById('nome').value;
    convidados = ['Lucas','Mathues','José','Laura']
    if(convidados.includes(NomeConvidado)){
       document.getElementById('PermissaoDeEntrada').innerText ="Voê PODE Entrar!"
    }else{
      document.getElementById('PermissaoDeEntrada').innerText = 'Você NÃO pode entrar!'
    }
}

