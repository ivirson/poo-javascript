const Locadora = require("./locadora")
const Locacao = require("./locacao")
const Veiculo = require("./veiculo")


const compass = new Veiculo("Jeep", "Compass", "2022", 200)
const locacaoQuarta = new Locacao(compass,"2022-03-21","2023-03-21", 4)
console.log(compass)
console.log(locacaoQuarta)
console.log(locacaoQuarta.calcularDuracao())
console.log(locacaoQuarta.calcularValorLocacao())