class Locacao {
    static contador = 0
    constructor (veiculo, dataInicio, dataFinal, quantidadeParcelas) {
        this.id = ++Locacao.contador
        this.veiculo = veiculo
        this.dataInicio = dataInicio
        this.dataFinal = dataFinal
        this.quantidadeParcelas = quantidadeParcelas
        this.marcarComoAlugado()
    }
    calcularDuracao() {
        // const dataInicio = new Date(this.dataInicio)
        // const diaInicio = dataInicio.getUTCDate()

        // const dataFinal = new Date(this.dataFinal)
        // const diaFinal = dataFinal.getUTCDate()

        // const numeroDeDias = diaFinal - diaInicio
        // return numeroDeDias
        const dataInicio = Date.parse(this.dataInicio.concat("T00:00-03:00"))
        const dataFinal = Date.parse(this.dataFinal.concat("T00:00-03:00"))
        const resultado = Math.floor(((((dataFinal - dataInicio)/ 1000) / 60) / 60) / 24)
        return resultado
    }

    calcularValorLocacao() {
        return this.veiculo.precoDiaria * this.calcularDuracao()
    }

    marcarComoAlugado() {
        this.veiculo.alugar()
    }
}

module.exports = Locacao