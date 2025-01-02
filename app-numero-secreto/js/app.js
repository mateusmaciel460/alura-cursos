let listaNumerosSorteados = [];
let numeroMaximo = 5;
let numeroSecreto = gerarNumeroAleatorio();
let chute;
let tentativas = 1;

function verificarChute() {
    chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativa' : 'tentativa';
        let mensagem = `Parabéns, você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`;

        exibirMensagemNaTela('h1', 'Acertou!');
        exibirMensagemNaTela('p', mensagem);

        document.querySelector('#reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirMensagemNaTela('p', `O número secreto é menor que ${chute}.`);
        } else {
            exibirMensagemNaTela('p', `O número secreto é maior que ${chute}.`);
        }

        tentativas++;
        limparCampo();
    }
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    exibirMensagemInicial();
    limparCampo();
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeNumerosSorteados = listaNumerosSorteados.length;

    if (quantidadeNumerosSorteados == numeroMaximo) {
        listaNumerosSorteados = [];
    }

    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}

function exibirMensagemNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirMensagemNaTela('h1', 'Jogo do número secreto');
    exibirMensagemNaTela('p', `Escolha um número entre 1 e ${numeroMaximo}`);
}

exibirMensagemInicial();