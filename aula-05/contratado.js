const BeneficioFolha = require("./beneficio-folha");
const Funcionario = require("./funcionario");

class Contratado extends Funcionario {
  #beneficios;
  constructor(id, nome, cpf, dtNasc, salarioBase, descontos, beneficios) {
    super(id, nome, cpf, dtNasc, salarioBase, descontos);
    this.#beneficios = beneficios;
  }

  adicionaBeneficio(beneficio) {
    if (beneficio instanceof BeneficioFolha) {
      this.#beneficios.push(beneficio);
    }
  }

  #calcularBeneficiosTotal() {
    const beneficios = this.#beneficios.reduce(
      (acumulador, valorAtual) => acumulador + valorAtual.valor,
      0
    );

    if (beneficios !== undefined) {
      return beneficios;
    }

    return 0;
  }

  get salario() {
    const salario = super.salario;
    return salario + this.#calcularBeneficiosTotal();
  }
}

module.exports = Contratado;
