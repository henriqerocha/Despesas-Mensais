
//Função Proventos

function criarCaixaProventos() {
    // cria o elemento de entrada de texto
    var caixaDescricao = document.createElement("input");
    caixaDescricao.style.backgroundColor = '#94df94';
    caixaDescricao.type = "text";
    caixaDescricao.className = "meu-texto";
    caixaDescricao.name = "descricao";

    var caixaValor = document.createElement("input");
    caixaValor.style.backgroundColor = '#94df94';
    caixaValor.type = "number";
    caixaValor.className = "valorProventos";
    caixaValor.name = "descricao";


    // adiciona a caixa de texto à div
    var div = document.getElementById("descricao");
    div.appendChild(caixaDescricao);

    var div = document.getElementById("valor");
    div.appendChild(caixaValor);


  }


  //Função Despesas

  function criarCaixaDespesas() {
    // cria o elemento de entrada de texto
    var caixaDescricao = document.createElement("input");
    caixaDescricao.style.backgroundColor = '#cc8383';
    caixaDescricao.type = "text";
    caixaDescricao.className = "meu-texto";
    caixaDescricao.name = "descricao";

    var caixaValor = document.createElement("input");
    caixaValor.style.backgroundColor = '#cc8383';
    caixaValor.type = "number";
    caixaValor.className = "valorDespesas";
    caixaValor.name = "descricao";
  



    // adiciona a caixa de texto à div
    var div = document.getElementById("descricao");
    div.appendChild(caixaDescricao);

    var div = document.getElementById("valor");
    div.appendChild(caixaValor);
  }

  function calcular(){
    //Calcula os valores de proventos e despesas
    var totalProventos = 0;
    var totalDespesas = 0;
    var inputsProventos = document.querySelectorAll("input[class='valorProventos']");
    var inputsDespesas = document.querySelectorAll("input[class='valorDespesas']");
    var total = 0;
    
    for(var i=0; i<inputsDespesas.length; i++){
      totalDespesas -= parseFloat(inputsDespesas[i].value);
    }

    for(var i=0; i<inputsProventos.length; i++){
      totalProventos += parseFloat(inputsProventos[i].value);
    }
    
    total = totalDespesas + totalProventos;



    // Seleciona o elemento de entrada pelo ID
    var span = document.getElementById("resultado-calculo");
    
    // Chama a função para calcular o resultado
    var resultado = total;
    
    // Define o valor do elemento de entrada para o resultado
    span.innerHTML = resultado;

    return total;
  }

 