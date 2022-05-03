/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
// referenced https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


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
    pokeText.innerText = "Your partner Pokemon is " + pkmn.name + "!";
    var pokeImg = document.getElementById("pokeImg");
    pokeImg.src = pkmn.sprites.other["official-artwork"].front_default;
    console.log(pkmn.name);

    changeDisplay(pkmn);
  }


  // changes background based on type
  function changeDisplay(pkmn) {
      if(pkmn.types["0"].type.name == "normal")
      {
          document.body.style.background = "#f5e6d7";
      }
      else if(pkmn.types["0"].type.name == "fire")
      {
        document.body.style.background = "#ff6e6e";
      }
      else if(pkmn.types["0"].type.name == "water")
      {
        document.body.style.background = "#b0d5ff";
      }
      else if(pkmn.types["0"].type.name == "grass")
      {
        document.body.style.background = "#99cfb0";
      }
      else if(pkmn.types["0"].type.name == "electric")
      {
        document.body.style.background = "#ffec9e";
      }
      else if(pkmn.types["0"].type.name == "ice")
      {
        document.body.style.background = "#ccf9ff";
      }
      else if(pkmn.types["0"].type.name == "fighting")
      {
        document.body.style.background = "#fcccb6";
      }
      else if(pkmn.types["0"].type.name == "poison")
      {
        document.body.style.background = "#a05ecc";
      }
      else if(pkmn.types["0"].type.name == "ground")
      {
        document.body.style.background = "#b38a6f";
      }
      else if(pkmn.types["0"].type.name == "flying")
      {
        document.body.style.background = "#d3dbf2";
      }
      else if(pkmn.types["0"].type.name == "psychic")
      {
        document.body.style.background = "#e8a9b7";
      }
      else if(pkmn.types["0"].type.name == "bug")
      {
        document.body.style.background = "#a1b895";
      }
      else if(pkmn.types["0"].type.name == "rock")
      {
        document.body.style.background = "#a69086";
      }
      else if(pkmn.types["0"].type.name == "ghost")
      {
        document.body.style.background = "#c092d4";
      }
      else if(pkmn.types["0"].type.name == "dark")
      {
        document.body.style.background = "#77728a";
      }
      else if(pkmn.types["0"].type.name == "dragon")
      {
        document.body.style.background = "#a7a8db";
      }
      else if(pkmn.types["0"].type.name == "steel")
      {
        document.body.style.background = "#b5b5c4";
      }
      else if(pkmn.types["0"].type.name == "fairy")
      {
        document.body.style.background = "#ffdef5";
      }
  }
  
  var endpt = "https://pokeapi.co/api/v2/pokemon/" +  (random(1,900)).toString();



