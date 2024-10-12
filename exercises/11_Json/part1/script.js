const getShoes = async() => {
    const url = "https://portiaportia.github.io/json/shoes.json";

    try {
        const response = await fetch(url);
        //console.log(response);
        return response.json();
    } catch(error){
        console.log(error);
    }
};

const showShoes = async () => {
    const shoes = await getShoes();
    //console.log(shoes);
    //console.log("here");
    shoes.forEach((shoe)=>{
        document.getElementById("shoes-section").append(getShoeSection(shoe));
    })
};


const getShoeSection = (shoe) => {
    const section = document.createElement("section");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const ul = document.createElement("ul");
    

    h3.innerHTML = shoe.name;
    section.append(h3);

    p.innerHTML = shoe.brand;
    section.append(p);

    section.append(ul);

    //Looop through the reviews
    shoe.reviews.forEach((review)=>{
        console.log(review);
        const li = document.createElement("li");
        li.innerHTML = review;
        ul.append(li);
    });
    
    
    return section;
}

//show all of the shoes when the page loads
showShoes();