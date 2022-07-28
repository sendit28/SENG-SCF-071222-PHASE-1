let pokemons = [
  {
      id: 1,
      name: "bulbasaur",
      frontImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      backImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      weight: 69
  },
  {
      id: 2,
      name: "ivysaur",
      frontImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
      backImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png",
      weight: 130
  },
  {
      id: 3,
      name: "venusaur",
      frontImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
      backImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png",
      weight: 1000
  },
  {
      id: 4,
      name: "charmander",
      frontImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      backImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
      weight: 85
  },
  {
      id: 5,
      name: "charmeleon",
      frontImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
      backImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/5.png",
      weight: 190
  },
  {
      id: 6,
      name: "charizard",
      frontImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
      backImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png",
      weight: 905
  },
  {
      id: 7,
      name: "squirtle",
      frontImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
      backImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png",
      weight: 90
  },
  {
      id: 8,
      name: "wartortle",
      frontImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
      backImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/8.png",
      weight: 225
  },
  {
      id: 9,
      name: "blastoise",
      frontImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
      backImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/9.png",
      weight: 855
  },
  {
      id: 10,
      name: "caterpie",
      frontImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
      backImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/10.png",
      weight: 29
  },
  {
      id: 11,
      name: "metapod",
      frontImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
      backImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/11.png",
      weight: 99
  },
  {
      id: 12,
      name: "butterfree",
      frontImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      backImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png",
      weight: 320
  },
  {
      id: 13,
      name: "weedle",
      frontImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
      backImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/13.png",
      weight: 32
  },
  {
      id: 14,
      name: "kakuna",
      frontImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
      backImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/14.png",
      weight: 100
  },
  {
      id: 15,
      name: "beedrill",
      frontImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
      backImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/15.png",
      weight: 295
  },
  {
      id: 16,
      name: "pidgey",
      frontImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
      backImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/16.png",
      weight: 18
  },
  {
      id: 17,
      name: "pidgeotto",
      frontImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
      backImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/17.png",
      weight: 300
  },
  {
      id: 18,
      name: "pidgeot",
      frontImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
      backImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/18.png",
      weight: 395
  },
  {
      id: 19,
      name: "rattata",
      frontImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
      backImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/19.png",
      weight: 35
  },
  {
      id: 20,
      name: "raticate",
      frontImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
      backImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/20.png",
      weight: 185
  },
  {
      id: 21,
      name: "spearow",
      frontImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
      backImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/21.png",
      weight: 20
  },
  {
      id: 22,
      name: "fearow",
      frontImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
      backImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/22.png",
      weight: 380
  },
  {
      id: 23,
      name: "ekans",
      frontImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
      backImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/23.png",
      weight: 69
  },
  {
      id: 24,
      name: "arbok",
      frontImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
      backImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/24.png",
      weight: 650
  },
  {
      id: 25,
      name: "pikachu",
      frontImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      backImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png",
      weight: 60
  },
  {
      id: 26,
      name: "raichu",
      frontImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
      backImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/26.png",
      weight: 300
  },
  {
      id: 27,
      name: "sandshrew",
      frontImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
      backImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/27.png",
      weight: 120
  },
  {
      id: 28,
      name: "sandslash",
      frontImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
      backImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/28.png",
      weight: 295
  },
  {
      id: 29,
      name: "nidoran-f",
      frontImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
      backImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/29.png",
      weight: 70
  },
  {
      id: 30,
      name: "nidorina",
      frontImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
      backImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/30.png",
      weight: 200
  },
  {
      id: 31,
      name: "nidoqueen",
      frontImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
      backImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/31.png",
      weight: 600
  },
  {
      id: 32,
      name: "nidoran-m",
      frontImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
      backImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/32.png",
      weight: 90
  },
  {
      id: 33,
      name: "nidorino",
      frontImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
      backImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/33.png",
      weight: 195
  },
  {
      id: 34,
      name: "nidoking",
      frontImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
      backImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/34.png",
      weight: 620
  },
  {
      id: 35,
      name: "clefairy",
      frontImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
      backImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/35.png",
      weight: 75
  },
  {
      id: 36,
      name: "clefable",
      frontImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
      backImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/36.png",
      weight: 400
  },
  {
      id: 37,
      name: "vulpix",
      frontImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
      backImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/37.png",
      weight: 99
  },
  {
      id: 38,
      name: "ninetales",
      frontImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
      backImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/38.png",
      weight: 199
  },
  {
      id: 39,
      name: "jigglypuff",
      frontImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
      backImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/39.png",
      weight: 55
  },
  {
      id: 40,
      name: "wigglytuff",
      frontImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
      backImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/40.png",
      weight: 120
  },
  {
      id: 41,
      name: "zubat",
      frontImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
      backImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/41.png",
      weight: 75
  },
  {
      id: 42,
      name: "golbat",
      frontImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
      backImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/42.png",
      weight: 550
  },
  {
      id: 43,
      name: "oddish",
      frontImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
      backImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/43.png",
      weight: 54
  },
  {
      id: 44,
      name: "gloom",
      frontImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
      backImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/44.png",
      weight: 86
  },
  {
      id: 45,
      name: "vileplume",
      frontImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
      backImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/45.png",
      weight: 186
  },
  {
      id: 46,
      name: "paras",
      frontImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
      backImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/46.png",
      weight: 54
  },
  {
      id: 47,
      name: "parasect",
      frontImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
      backImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/47.png",
      weight: 295
  },
  {
      id: 48,
      name: "venonat",
      frontImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
      backImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/48.png",
      weight: 300
  },
  {
      id: 49,
      name: "venomoth",
      frontImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
      backImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/49.png",
      weight: 125
  },
  {
      id: 50,
      name: "diglett",
      frontImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
      backImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/50.png",
      weight: 8
  }
]

// let pokemons = [];
// function fetchUrl() {
//   sendToPage("Fetching Data...");
//   fetch("https://pokeapi.co/api/v2/pokemon/?limit=50")
//     .then((r) => r.json())
//     .then((data) =>
//       data.results.forEach((pokeObj, index) => grabPokemon(pokeObj.url, index))
//     );
// }

// function grabPokemon(pokeUrl, index) {
//   fetch(pokeUrl)
//     .then((r) => r.json())
//     .then((pokemonData) => formatPokemonData(pokemonData, index));
// }

// function formatPokemonData(pokeData, index) {
//   const id = index + 1
//   const name = pokeData.name;
//   const frontImg = pokeData.sprites.front_default;
//   const backImg = pokeData.sprites.back_default
//   const weight = pokeData.weight;
//   pokemons.push({ id, name, frontImg, backImg, weight });
// }
// fetchUrl();
// setTimeout(() => pokemons.sort((a,b) => a.id - b.id), 1000)

