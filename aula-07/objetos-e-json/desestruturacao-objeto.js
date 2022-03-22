const pessoa = {
  nome: "Amaro",
  sobrenome: "Santos",
  idade: 25,
  sexo: "M",
  cpf: "01234567890",
  endereco: {
    rua: "Rua A",
    numero: 254,
    complemento: "Bloco 54",
  },
};

// const nome = pessoa.nome
// const sobrenome = pessoa.sobrenome

// const { nome, sobrenome } = pessoa;

// console.log(nome);
// console.log(sobrenome)

const { cpf, nome, ...pessoaSemCPF } = pessoa;

// const pessoaSemCPF = {...pessoa}

console.log(pessoaSemCPF);
console.log(cpf);
