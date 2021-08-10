document.addEventListener('click', () => {

        function fetchData() {
            fetch('https://pokeapi.co/api/v2/pokemon')
                .then(response => response.json())
                .then(data => pokemonData(data))
        }

        function pokemonData(data) {
            for (const q of data) {

                const quoteUL = document.querySelector('#poke-container');


                fetchData();


            }
        }

    }
)

// // var pokemonName = ['Arceus', 'Eternatus', 'Mega Mewtwo X And Y', 'Mega Sceptile'];
// for (var i = 0; i < pokemonName.length; i++) {
//     console.log('This is ' + pokemonName[i] +"it is at index " + i +" in the array" );
//
// var pokemon = [
//     {
//         name: "Arceus",
//         type: "Normal",
//         height: "10 feet 6 inches",
//         weight: "705.48 pounds",
//         url: "Arceus.jpeg",
//         // features: ["Go shorty", "it's your birthday", "We gon' party like it's yo birthday"],
//         // owner: {
//         //     name: "Wagner Charles",
//         //     age: 32
//
//         // }
//     },
//     {
//         make: "Eternatus",
//         model: "Poison",
//         height: "65 feet 7 inches",
//         weight: "2094.4 pounds",
//         url: "Eternatus.jpeg",
//         // features: ["I'm too hot", "hot damn!", "Call the police and the fireman "],
//         // owner: {
//         //     name: "Wagner Charles",
//         //     age: 32
//         // }
//     },
//     {
//         name: "Mew",
//         type: "Psychic",
//         height: "104 feet",
//         weight: "8.8 pounds",
//         url: "Mew.jpeg",
//         // features: ["Somebody once told me", "the world is gonna roll me", "I ain't the sharpest tool in the shed"],
//         // owner: {
//         //     name: "Wagner Charles",
//         //     age: 32
//         // }
//     },
//     {
//         name: "Sceptile",
//         type: "Grass",
//         height: "10 feet 6 inches",
//         weight: "705.48 pounds",
//         url: "Sceptile.png",
//         // features: ["If you wanna be my lover", "you gotta get with my friends", "Make it last forever, friendship never ends"],
//         // owner: {
//         //     name: "Wagner Charles",
//         //     age: 32
//         // }
//     },
// ];
//
// // clickHandler();
// function clickHandler(e) {
//     alert('My element was clicked!');
//     whenClicked().append()
//     $("#poke-container").append(`
//         <h3>${pokemon[0].name}</h3>
//         <h3>${pokemon[0].type}</h3>
//         <h3>${pokemon[0].height}</h3>
//         <h3>${pokemon[0].weight}</h3>
//     `)
//
// }
//
// console.log("The first pokemon is a " + pokemon[0].name + " " + pokemon[0].type + ".");
// // console.log("The owner of the second pokemon is " + pokemon[1].owner.name + ".");
//
// whenClicked()
// function whenClicked () {
//
//     for (var i = 0; i < pokemon.length; i++) {
//         console.log('This is ' + pokemon[i] + "it is at index " + i + " in the array");
//
//         console.log(pokemon)
//   return pokemon, i
//     }
// }
// //
// // pokemon.forEach(function (pokemon) {
// //     pokemon.features.forEach(function (feature) {
// //         console.log(feature);
// //     });
//
//
// // });
//
