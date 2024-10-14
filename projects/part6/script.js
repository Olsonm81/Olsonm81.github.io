//Was not able to get the seperate json file working so, I added it to the script
const locations = [
    {
        "state": "Washington Deployment",
        "city": "Durkee",
        "f-or-e": "Fire",
        "date": "",
        "people": ["Jason"],
        "description": "Our team was task with going to Washington state to put out several fires in the local area. We were able to accomplish this mission and were successful in putting out the fire that was widespread. While there we were able to provide critical support and medical care to the local community.",
        
        "images": [
            "washington-fire-gallery.jpg",
            "",
            ""
        ]
    },
    //Working to be able to have multiple gallery entries work and maybe the map
    /*{
        "state": "Idaho",
        "city": "Limepoint",
        "f-or-e": "Fire",
        "date":"August 15th 2024",
        "people": ["Junior", "Adam"],
        "description": "Assisted with the removal of trees that feel during the fire. Also, helped reduced the spread of the fire to other parts of the National Forest.",
        
        "images": [
            "#40231D",
            "#592202",
            "#8C4B26"
        ]
    }*/
    
]
// gets the loction informaiton
const getLocations = async () => {
        locations.forEach(location => {
            showLocation(location);
        });
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
