function criarCaixaDeTexto() {
    // cria o elemento de entrada de texto
    var caixaDeTexto = document.createElement("input");
    caixaDeTexto.type = "text";
    caixaDeTexto.id = "meu-texto";
    caixaDeTexto.name = "meu-texto";



    // adiciona a caixa de texto à div
    var div = document.getElementById("descricao");
    div.appendChild(caixaDeTexto);
  }