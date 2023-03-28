
//Função Proventos

function criarCaixaProventos() {
    // cria o elemento de entrada de texto
    var caixaDescricao = document.createElement("input");
    caixaDescricao.style.backgroundColor = '#94df94';
    caixaDescricao.type = "text";
    caixaDescricao.id = "meu-texto";
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
    caixaDescricao.id = "meu-texto";
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