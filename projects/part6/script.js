// gets the loction informaiton
const getLocations = async (e) => {
    try {
        const response = ( await fetch("locations.json")).json();
        } 
        catch(error) {
            console.log(error);
            return;
        }
};


const showLocation = (state) => {
    //creates different aspects used
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const img = document.createElement("img");
    //console.log(state);
    
    const wash = document.getElementById("washington");
    //Adds title and description of what occured
    h3.innerHTML = state.state;
    wash.append(h3);
    //console.log(state.state)

    p.innerHTML = state.description;
    wash.append(p);

    //Adds the image will have multiple for slideshow currently just one
    img.src = "images/"+state.images[0];
    img.alt = "Gallery of fire that occured in washington"
    img.style.width = "300" + "px";
    img.style.height = "400" + "px";

    //console.log(state.images[0]);
    document.getElementById("gal").append(img);
    
    //document.getElementById("washington").append(p);
}

getLocations();



