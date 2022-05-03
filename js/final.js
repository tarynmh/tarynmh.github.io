var userName = document.getElementById("userInput"); // gets name from user


// gets the user's name and pokemon
function getPokemon()
{
    var chosenPkmnText = document.getElementById("assignedPkmn");

    document.getElementById("assignedPkmn").innerText = "Hi " + userName;
}