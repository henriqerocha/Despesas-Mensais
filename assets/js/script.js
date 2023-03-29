
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
    caixaValor.id = "valorProventos";
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
    caixaValor.id = "valorDespesas";
    caixaValor.name = "descricao";



    // adiciona a caixa de texto à div
    var div = document.getElementById("descricao");
    div.appendChild(caixaDescricao);

    var div = document.getElementById("valor");
    div.appendChild(caixaValor);
  }

  function calcular(){
    //Calcula os valores de proventos e despesas
    var inputs = document.querySelectorAll("input[type=number]");
    var inputsProventos = document.querySelectorAll("input[id='valorProventos']");
    var totalProventos = 0;
    var inputsDespesas = document.querySelectorAll("input[id='valorDespesas']");
    var totalDespesas = 0;
    var total = 0;
    
    for(var i=0; i<inputsDespesas.length; i++){
      totalProventos = totalProventos + parseFloat(inputsProventos[i].value);
      totalDespesas = totalDespesas + parseFloat(inputsDespesas[i].value);
      total = totalProventos - totalDespesas;

    }
    
    alert("O total é: " + total);
  

    

  }