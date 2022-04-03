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

document.getElementById("chicken").addEventListener("click", chickenBonk);

function chickenBonk() {
  var bonkSound = document.getElementById("bonk");
  bonkSound.play();
  document.getElementById("chicken").src = "../img/bonkChickenImg6.png"
  document.getElementById("chickentxt").style.display = "none";
  
}



var azurillSprite = document.getElementById("azurill");
azurillSprite.addEventListener("mouseover", azurillHover1, false);
azurillSprite.addEventListener("mouseout", azurillHover2, false);

function azurillHover1() {
  azurillSprite.src = "../img/../img/Azurill.gif";
}

function azurillHover2() {
  azurillSprite.src = "../img/../img/azurillstatic.png";
}