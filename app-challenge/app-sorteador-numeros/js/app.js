let quantidade = document.querySelector('#quantidade');
let de = document.querySelector('#de');
let ate = document.querySelector('#ate');
let resultado = document.querySelector('#resultado');
let botaoReiniciar = document.querySelector('#botao-reiniciar');

function sortear() {
    let valorQuantidade = quantidade.value;
    let valorDe = de.value;
    let valorAte = ate.value;

    let listaDeNumerosSorteados = [];
    let numeroAleatorio;

    let calculoDiferencaDeAte = (valorAte - valorDe) + 1;
    let verificarQuantidade = valorQuantidade > calculoDiferencaDeAte ? calculoDiferencaDeAte : valorQuantidade;

    if (valorQuantidade > calculoDiferencaDeAte) {
        alert(`A quantidade ${valorQuantidade} não é permitida, vamos gerar até ${calculoDiferencaDeAte}.`);
        
        alterarStatusBotao();
        quantidade.value = calculoDiferencaDeAte;
    }

    for (let contador = 1; contador <= verificarQuantidade; contador++) {
        numeroAleatorio = obterNumeroSorteado(valorDe, valorAte);

        while (listaDeNumerosSorteados.includes(numeroAleatorio)) {
            numeroAleatorio = obterNumeroSorteado(valorDe, valorAte);
        }

        listaDeNumerosSorteados.push(numeroAleatorio);
    }

    resultado.innerHTML = `${listaDeNumerosSorteados.join(', ')}`;
    alterarStatusBotao();
}

function reiniciar() {
    alterarStatusBotao();

    quantidade.value = '';
    de.value = '';
    ate.value = '';
    
    resultado.innerHTML = 'nenhum até agora';
}

function alterarStatusBotao() {
    let classeBotaoReiniciar = botaoReiniciar.classList;

    if (classeBotaoReiniciar.contains('container__botao-desabilitado')) {
        classeBotaoReiniciar.remove('container__botao-desabilitado');
        classeBotaoReiniciar.add('container__botao');
    } else {
        classeBotaoReiniciar.add('container__botao-desabilitado');
        classeBotaoReiniciar.remove('container__botao');
    }
}

function obterNumeroSorteado(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}