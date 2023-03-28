function criarCaixaProventos() {
    // cria o elemento de entrada de texto
    var caixaDescricao = document.createElement("input");
    caixaDescricao.style.backgroundColor = '#d2ffd2';
    caixaDescricao.type = "text";
    caixaDescricao.id = "meu-texto";
    caixaDescricao.name = "descricao";

    var caixaValor = document.createElement("input");
    caixaValor.style.backgroundColor = '#d2ffd2';
    caixaValor.type = "number";
    caixaValor.id = "meu-texto";
    caixaValor.name = "descricao";



    // adiciona a caixa de texto à div
    var div = document.getElementById("descricao");
    div.appendChild(caixaDescricao);

    var div = document.getElementById("valor");
    div.appendChild(caixaValor);
  }

  function criarCaixaDespesas() {
    // cria o elemento de entrada de texto
    var caixaDescricao = document.createElement("input");
    caixaDescricao.style.backgroundColor = '#ffd2d2';
    caixaDescricao.type = "text";
    caixaDescricao.id = "meu-texto";
    caixaDescricao.name = "descricao";

    var caixaValor = document.createElement("input");
    caixaValor.style.backgroundColor = '#ffd2d2';
    caixaValor.type = "number";
    caixaValor.id = "meu-texto";
    caixaValor.name = "descricao";



    // adiciona a caixa de texto à div
    var div = document.getElementById("descricao");
    div.appendChild(caixaDescricao);

    var div = document.getElementById("valor");
    div.appendChild(caixaValor);
  }