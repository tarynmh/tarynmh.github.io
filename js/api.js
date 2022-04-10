// assignment 12

function changeText() {
    const dogText = document.getElementById("dogText");
    dogText.innerHTML = "A dog! To brighten up your day :)";
}

async function getDog() {
    console.log("user clicked button");
    // try and catch for errors
  
    try {
      const response = await fetch(endpt);
      if(!response.ok) {
        throw Error(response.statusText);
      }
  
      const dogData = await response.json();
      displayDog(dogData.message);
    }
    catch(error) {
      console.log(error);
      alert("Error");
    }
  }
  
  function displayDog(dog) {
    const dogImg = document.getElementById("dogPic");
    dogImg.src = dog;
  }
  
  const endpt = "https://dog.ceo/api/breeds/image/random";
  
  const dogButton = document.getElementById("dogButton");
  dogButton.addEventListener("click", getDog);
  dogButton.addEventListener("click", changeText);