class Veiculo {
    static contador = 0
    constructor(marca, modelo, ano, precoDiaria){
        this.id = ++Veiculo.contador
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        this.precoDiaria = precoDiaria
        this.estaAlugado = false
    }

    alugar() {
        this.estaAlugado = true
    }

    devolver() {
        this.estaAlugado = false
    }

}

module.exports = Veiculo