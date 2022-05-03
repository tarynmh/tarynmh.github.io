var userName = document.getElementById("userInput"); // gets name from user


// helper function -- referenced https://www.joshwcomeau.com/snippets/javascript/random/
// * used to generate a random number between a range you specify (exclusive)
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

// gets the user's name and pokemon
function getPokemon()
{
    
    var chosenPkmnText = document.getElementById("assignedPkmn");

    document.getElementById("nameGreeting").innerText = "Hello, " + userName.value + "!";

    fetchPokemon(); // get a pokemon
}

async function fetchPokemon() {
    try {
      const response = await fetch(endpt);
      if(!response.ok) {
        throw Error(response.statusText);
      }

    //   var randNum = random(1,900); // generates a random number in order to get pokemon id
      const pkmnData = await response.json();
      
      endpt = "https://pokeapi.co/api/v2/pokemon/" +  (random(1,900)).toString(); // we need to redefine the endpoint because we want a different pokemon if the user hits the button again
      console.log(pkmnData);
      displayPokemon(pkmnData);
    }
    catch(error) {
      console.log(error);
      alert("Error");
    }
  }
  
  function displayPokemon(pkmn) {
    var pokeText = document.getElementById("assignedPkmn");
    var pokeImg = document.getElementById("pokemonImage");
    console.log(pkmn.name);
    // pokeImg.src = pkmn;
  }
  
  var endpt = "https://pokeapi.co/api/v2/pokemon/" +  (random(1,900)).toString();

// async function fetchPokemon(){
//     // *** fetch portion ***
//     var randNum = random(1,900); // generates a random number in order to get pokemon id
//     var pokeUrl = "https://pokeapi.co/api/v2/pokemon/" + randNum.toString();
//     console.log(pokeUrl);
//     fetch(pokeUrl) // fetches a random pokemon
//     .then(response => response.json())
//     .then(pkmn => console.log(pkmn));

//     // *** output portion ****
//     var pokeName = pkmn.name;
//     console.log(pokeName);
//     document.getElementById("assignedPkmn").innerText = "Your Pokemon partner is ";
//   }

