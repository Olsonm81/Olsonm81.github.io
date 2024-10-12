//Gets information from the json database that was given
const getIce = async() => {
    const url = "https://portiaportia.github.io/json/ice-creams.json";
    try {
        const response = await fetch(url);
        return response.json();
    } catch(error) {
        console.log(error);
    }
};

//The function that acutally runs and displays the ice-cream info
const showIce = async() => {
  const iceCream = await getIce();
  
  //Loop that runs for each ice-cream in the json
  iceCream.forEach((ice)=>{
    document.getElementById("iceC").append(getIceCream(ice));
    //Test to see what ice was returning
    //console.log(ice);
  })
};

//Main portion that creates and adds imgs to the site
const getIceCream = (iceCream) => {
  //Creates the different <> needed
  const div = document.createElement("div");
  const img = document.createElement("img");
  const p = document.createElement("p");
  //Adds an id to each div
  div.id = iceCream.image;

  p.classList.toggle("hidden");

  //Had to add the other part of the website link so it can work
  img.src = "https://portiaportia.github.io/json/images/ice-creams/"+iceCream.image;
  div.append(img);

  p.innerHTML = iceCream.name;
  //Much like hover in CSS this ensures that if a mouse is over the img it will hide/unhide the name of the ice-cream its over
  img.onmouseover = () => {
    p.classList.toggle("hidden");
  }
  img.onmouseout = () => {
    p.classList.toggle("hidden");
  }
  
  div.append(p);
  return div;
};
//Shows ice since it is the main function that uses all the other functions
showIce();