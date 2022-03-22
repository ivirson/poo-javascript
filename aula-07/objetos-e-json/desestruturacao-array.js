const carros = ["Fiat Mobi", "Fiat Toro", "Hyundai HB20", "Honda Civic"];

// const novoArray = carros;
const novoArray = [...carros];

carros[0] = "Toyota Corolla";

console.log(carros);
console.log(novoArray);
