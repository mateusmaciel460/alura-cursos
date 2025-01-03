function exibirMensagemNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirMensagemNaTela('h1', 'Git e Github');
exibirMensagemNaTela('p', 'Aprendendo tudo sobre Git e Github')