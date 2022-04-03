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

function azurillHover1() {

}

function azurillHover2() {
  
}

var azurillSprite = document.getElementById("azurill");
item.addEventListener("mouseover", azurillHover1, false);
item.addEventListener("mouseout", azurillHover2, false);

function func()
{  // not needed since item is already global, 
   // I am assuming this is here just because it's sample code?
   // var item = document.getElementById("button"); 
   item.setAttribute("style", "background-color:blue;")
}

function func1()
{  
   item.setAttribute("style", "background-color:green;")
}