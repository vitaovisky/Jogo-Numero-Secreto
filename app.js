let listaDeNumerosSorteados = [];
let valorMaximo = 100;
let numeroSecreto = gerarAleatorio(valorMaximo);
let tentativas = 1;
let fraseInicial = `Escolha um número entre 1 e ${valorMaximo}.`;

textoInicial();


function textoInicial(){
    exibirTextoNaTela('h1', 'Jogo Do Número Secreto');
    exibirTextoNaTela('p', fraseInicial);
}

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function acertouNumeroSecreto(){
    document.getElementById('reiniciar').removeAttribute('disabled');
    document.getElementById('botaoChutar').style.display='none';
    document.getElementById('inputChute').style.display='none';
    exibirTextoNaTela('h1', 'Você acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas':'tentativa'
    let mensagemTentativas = `Você descobriu o número secreto em ${tentativas} ${palavraTentativa}.`
    exibirTextoNaTela('p', mensagemTentativas);
    
}


function verificarChute(){
    let chute = document.querySelector('input').value
    if (chute == numeroSecreto){
        acertouNumeroSecreto();
    }else if(chute>numeroSecreto){
        let textoMenor = `O número secreto é menor que ${chute}.`
        exibirTextoNaTela('p', textoMenor);
    }else{
        let textoMaior = `O número secreto é maior que ${chute}.`
        exibirTextoNaTela('p', textoMaior);
    }
    tentativas++;
    limparCampo();
}

function gerarAleatorio(maximo){
    let numeroEscolhido = parseInt(Math.random() * maximo + 1);
    let quantidadeNumerosNaLista = listaDeNumerosSorteados.length;
    if(maximo == quantidadeNumerosNaLista){
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        console.log(listaDeNumerosSorteados);
        return gerarAleatorio(maximo);

    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }

}

function limparCampo(){
    chute = document.querySelector('input')
    chute.value = ('')
}

function reiniciarJogo(){
    document.getElementById('botaoChutar').style.display='block';
    document.getElementById('inputChute').style.display='block';
    document.getElementById('reiniciar').setAttribute('disabled', true);
    numeroSecreto = gerarAleatorio(valorMaximo);
    tentativas = 1;
    textoInicial();
}