interface pessoa {
    nome: string;
    idade: number;
    profissao: Profissao;
}

enum Profissao {
    Atriz,
    Padeiro,
}

const pessoa1: pessoa = {
    nome: 'Maria',
    idade: 25,
    profissao: Profissao.Atriz,
}

const pessoa2: pessoa = {
    nome: 'Roberto', 
    idade: 19,
    profissao: Profissao.Padeiro,
}

const pessoa3: pessoa = {
    nome: 'Laura',
    idade: 32,
    profissao: Profissao.Atriz,
}

const pessoa4: pessoa = {
    nome: 'Carlos',
    idade: 19,
    profissao: Profissao.Padeiro,
}

function printPessoa(pessoa: pessoa) {
    return `Nome: ${pessoa.nome} \nIdade: ${pessoa.idade} \nProfissão: ${pessoa.profissao}`;
}

console.log(printPessoa(pessoa4));


