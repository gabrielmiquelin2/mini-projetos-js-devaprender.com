function VerificarEntrada(){
    NomeConvidado = document.getElementById('nome').value;
    MeusConvidados = ['Lucas','Mathues','José','Laura']
    if(MeusConvidados.includes(NomeConvidado)){
       document.getElementById('PermissaoDeEntrada').innerText ="Voê PODE Entrar!"
    }else{
      document.getElementById('PermissaoDeEntrada').innerText = 'Você NÃO pode entrar!'
    }
}