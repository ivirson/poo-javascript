class Locadora {
    constructor(listaVeiculos, listaLocacoes) {
        this.listaVeiculos = listaVeiculos
        this.listaLocacoes = listaLocacoes
    }

    veiculoExiste(idveiculo) {
        const existe = this.listaVeiculos.some((veiculo) => veiculo.id === idveiculo)
        return existe
    }

    locacaoExiste(idlocacao) {
        const existe = this.listaVeiculos.some((locacao) => locacao.id === idlocacao)
        return existe
    }

    adicionarVeiculos(veiculo) {
        this.listaVeiculos.push(veiculo)
    }
    
    gerarLocacao(locacao) {
        this.listaLocacoes.push(locacao)
    }

}

module.exports = Locadora