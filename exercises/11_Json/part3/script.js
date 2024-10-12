const getCocktails = async() => {
    //async: do functions in the background
    console.log("getCocktails");
    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
  
    try {
      //http request results in a http response
      const response = await fetch(url);
      return response.json();
    } catch(error) {
      console.log(error);
    }
  };
  
  //needs to be async to call an async function
  const showCocktails = async() => {
    console.log("showDrinks");
    const drinks = await getCocktails();
    const cocktails = drinks.drinks;
    console.log(cocktails);
  
    cocktails.forEach((cocktail) => {
      document.getElementById("cocktails").append(getCocktailSection(cocktail));
    });
  
  };
  
  const getCocktailSection = (cocktail) => {
    // create main section
    const section = document.createElement("section");
    section.classList.add("cocktail");
  
    //image size of section
    const img = document.createElement("img");
    img.classList.add("hidden");
    img.id = "imgs"
    img.src = cocktail.strDrinkThumb;
    section.append(img);
  
    // button 
    const drinkBtn = document.createElement("button");
    drinkBtn.id = `submit`;
    drinkBtn.innerHTML = "Next Drink";
   
    section.append(drinkBtn);
    return section;
  }

document.getElementById("submit").onclick = () => {
    document.getElementById("imgs").classList.remove("hidden");
};
  
  //show all of the cocktails when the page loads
  showCocktails();