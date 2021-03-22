var clientes = [
  [
   nome = "Bruno",
   codigo = "147", 
   senha = "123", 
   saldo = 635
  ], 
  [
   nome = "Felipe",
   codigo = "258", 
   senha = "456", 
   saldo = 50
  ],
  [
   nome = "Sabrina",
   codigo = "369", 
   senha = "789", 
   saldo = 2176
  ],
  [
   nome = "Joana",
   codigo = "159", 
   senha = "357", 
   saldo = 10000
  ],
]

/** @function */
function procura_cliente(cliente){
  return cliente[1] == codigo && cliente[2] == senha
}
/** @function */
function procura_codigo(code){
  return code[1] == codigo_transferencia
}
/** @function */
function atualiza_saldo(codigo, codigo_transferencia, operacao, valor){
  return clientes.map(cliente => {
      if(cliente[1] == codigo){
          if(operacao == 1){
              if(valor <= cliente[3]){
                  cliente[3] = cliente[3] - valor;
                  alert("Seu saldo atual é: R$"+cliente_localizado[3])
              }
              else {
                  alert("Saldo Indísponivel");
                  cliente[3] = cliente [3];
              }
          }
          else if(operacao == 2){
              cliente[3] = cliente[3] + valor;
              alert("Seu saldo atual é: R$"+cliente_localizado[3])
          }
          else if(operacao == 3 && codigo_localizado[1] == codigo_transferencia){
              if(valor <= cliente[3]){
                cliente[3] = cliente[3] - valor;
                codigo_localizado[3] = codigo_localizado[3] + valor;
                alert("Transferência efetuada com sucesso! Seu saldo atual é: R$"+cliente_localizado[3])
              }else{
                alert("Erro: verifique seu saldo.")
              }
          }
      }
  });
}

nova = true;

while(nova){

  var codigo = window.prompt("Insira seu código de acesso:")
  var senha = window.prompt("Insira sua senha:")

  cliente_localizado = (clientes.find(procura_cliente))
  
  if(cliente_localizado == null){
    alert("Cliente não encontrado, por favor, verifique o seu código.")
  }
  else{
    
    continuar = true;
    
    while(continuar){
      var operacao = Number(window.prompt("Escolha a operação que deseja executar: 1-Saque; 2-Depósito; 3-Transferência; 4-Verificação do saldo"))
      var codigo_transferencia = null;

      if(operacao == 1){
        var valor = Number(window.prompt("Insira o valor do saque:"))
      }
      else if(operacao == 2){
        var valor = Number(window.prompt("Insira o valor do depósito:"))
      }
      else if(operacao == 3){
        var codigo_transferencia = window.prompt("Insira o código de acesso, de usuário, o qual receberá a transferência:")
        codigo_localizado = (clientes.find(procura_codigo))

        if(codigo_localizado != null){
        var valor = Number(window.prompt("Insira o valor da transferência:"))
        } else{
          alert("Erro: código de transferência não localizado.")
        }
      }
      else if(operacao == 4){
        alert("Seu saldo atual é de: R$"+cliente_localizado[3])
      }
      else {
        alert("Erro: operação inválida.")
      }
      
      atualiza_saldo(codigo, codigo_transferencia, operacao, valor);

      continuar = window.confirm("Deseja fazer outra operação?")
    }
  }
    nova = window.confirm("Deseja acessar outra conta?")
}