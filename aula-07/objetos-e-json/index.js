const data = require("./data.json");

// const json =
//   '{"heroes": [{"id": 1,"name": "The Flash","publicadora": "DC"},{"id": 2,"name": "Wolverine","publicadora": "Marvel"},{"id": 3,"name": "Mulher Maravilha","publicadora": "DC"},{"id": 4,"name": "Capitão América","publicadora": "Marvel"},{"id": 5,"name": "Chapolin Colorado","publicadora": "Televisa"}]}';

// console.log(JSON.parse(json));

// console.log(data);

class Hero {
  // Alternativa, usando o Object.assign()
  // id;
  // name;
  // publicadora;
  // constructor(hero) {
  //   Object.assign(this, hero)
  // }

  constructor(id, name, publicadora) {
    this.id = id;
    this.name = name;
    this.publicadora = publicadora;
  }
}

class HeroesList {
  heroes;

  constructor(heroes) {
    // Alternativa usando a desestruturação
    this.heroes = heroes.map(
      ({ id, name, publicadora }) => new Hero(id, name, publicadora)
    );
    // Alternativa, usando o Object.assign()
    // this.heroes = heroes.map((item) => new Hero(item));
  }
}

const heroesList = new HeroesList(data.heroes);
console.log(heroesList);
