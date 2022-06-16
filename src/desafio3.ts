
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let saldoTotal = 0;


if (campoSaldo){
    campoSaldo.innerHTML = '0';
    
}

function somarAoSaldo(){
    if (campoSaldo){

        let saldo = parseInt(campoSaldo.innerHTML);
        saldoTotal = Number(soma.value) + saldo ;
        campoSaldo.innerHTML = saldoTotal.toString();
    }
    
}

function limparSaldo() {
    if (campoSaldo){
        campoSaldo.innerHTML = '0';
    }
}

if (botaoAtualizar) {
        botaoAtualizar.addEventListener('click', function () {
        somarAoSaldo();
    })
}

if (botaoLimpar) {
    
    botaoLimpar.addEventListener('click', function () {
        limparSaldo();
    })
}