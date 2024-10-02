//List that has the src tags for the images file
let imgs = ["images/clown.jpg", "images/birthday.jpg", "images/rain.jpg", "images/read.jpg", "images/shovel.jpg", "images/work.jpg"];

/* Description to go along with the imgs once clicked in an array */
let imgDescript = [];
imgDescript["images/clown.jpg"] = { title: "Clown", descript: "It's time to clown around!"};
imgDescript["images/birthday.jpg"] = { title: "Birthday", descript: "I am having a birthday!"};
imgDescript["images/rain.jpg"] = { title: "Rain", descript: "It is raining outside better bring an umbrella."};
imgDescript["images/read.jpg"] = { title: "Reading", descript: "I love reading books!"};
imgDescript["images/shovel.jpg"] = { title: "Shovel", descript: "I like to dig with my shovel."};
imgDescript["images/work.jpg"] = { title: "Work", descript: "I love working on coding assignments!"};

//Loops for each imgs that is in the let imgs on line 2
imgs.forEach((img)=> {
    const imageS = document.createElement("img");
    imageS.src = img;
    //Gave it an ID then decided that it would not be nessesary
    //imageS.id = `${imgDescript[img].title}`;
    //Used to ensure src were printing correctly for each of items in the line 2 coded list
    console.log(imageS);
    document.getElementById("imgs").append(imageS);


    imageS.onclick = () => {
        //To test to if the id was working
        //console.log(imageS.id);
        imgT = imgDescript[img].title;
        imgD = imgDescript[img].descript;
        //testing to see if it correctly gets the title and description from the array
        //console.log(imgT);
        //console.log(imgD);
       document.querySelector("#text-About h3").innerHTML = imgT;
       document.querySelector("#text-About p").innerHTML = imgD;
    };
  });
  
