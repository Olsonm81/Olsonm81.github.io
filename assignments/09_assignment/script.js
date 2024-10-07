//By Matthew Olson CSCE 242
class Bird {
  constructor(name, size, lifeSpan, food, habitat, pic, funFact) {
      this.name = name;
      this.size = size;
      this.lifeSpan = lifeSpan;
      this.food = food;
      this.habitat = habitat;
      this.pic = pic;
      this.funFact = funFact;
  }
  get item(){
    const section = document.createElement("section");
    section.classList.add("Bird");

    //create a header
    const h3 = document.createElement("h3");
    h3.innerHTML = this.name;
    section.append(h3);

    //create my columns
    const columnsDiv = document.createElement("div");
    columnsDiv.classList.add("columns");
    section.append(columnsDiv);
    const firstColumn = document.createElement("div");
    columnsDiv.append(firstColumn);
    const secondColumn = document.createElement("div");
    columnsDiv.append(secondColumn);

    //create image and add to first column
    firstColumn.append(this.picture(this.pic));

    //Had this incase Modals would not work in time
        /*//create info data and add to second column
        secondColumn.classList.add("hidden");
        secondColumn.append(this.paragraph("Size", this.size));
        secondColumn.append(this.paragraph("Lifespan", this.lifeSpan));
        secondColumn.append(this.paragraph("Food", this.food));
        secondColumn.append(this.paragraph("Habitat", this.habitat));
        secondColumn.append(this.paragraph("Interesting fact:", this.funFact));*/

        /*//create exand / contract arrow
        //Used the one from portia's exercise 10 on classes
        const expCon = document.createElement("a");
        expCon.href="#";
        expCon.innerHTML = "&#x2964;";
        h3.append(expCon);

        expCon.onclick = () => {
            secondColumn.classList.toggle("hidden");
        };*/


    return section;
}

displayModal(){
    const birdModal = document.getElementById("bird-modal");
    //Since the modal starts with hidden this removes it
    birdModal.classList.remove("hidden");

    //Used so that it changes the background to ensure that the box stands out
    document.body.style.setProperty(`--background-color`, `black`);
    document.body.style.setProperty(`--footer-color`, `darkcyan`);

    //Used to add the information of each bird into the modal
    document.getElementById("name").innerHTML = this.name;
    document.getElementById("size").innerHTML = `Size: `+ this.size;
    document.getElementById("lifespan").innerHTML = `Lifespan: ` + this.lifeSpan;
    document.getElementById("food").innerHTML = `Food: ` + this.food;
    document.getElementById("habitat").innerHTML = `Habitat: ` + this.habitat;
    document.getElementById("funfact").innerHTML = `Interesting Fact: ` + this.funFact;
    document.getElementById("birdImg").src = `images/` + this.pic;
    //Tested to get the img working in the modal
    //console.log(this.pic);

    window.onclick = function(e) {
        //Testing to get x button to close the modal
        //console.log(e.target.innerHTML);
        if (e.target.innerHTML == `×`) {
            //If the `x` button is clicked it will add hidden and change the colors back to normal
            birdModal.classList.add("hidden");
            document.body.style.setProperty(`--background-color`, `azure`);
            document.body.style.setProperty(`--footer-color`, `black`);
        }
    }
}
/*Both picture(info) and paragraph(title,info) referenced from portia's exercise 10 on classes*/
//Gets the img for the bird and adds a pointer to show the user to click on it
picture(info){
    const pic = document.createElement("img");
    pic.src = "images/" + info;
    //Added pointer and when clicked runs the displayModal
    pic.style.cursor = `pointer`;
    pic.onclick = () => {
        this.displayModal();
    };
    return pic;
}
//Makes it so the titles of the birds stands out and is bold
//Taken from exercise 10 classes w/ no modifications
paragraph(title, info) {
    const p =document.createElement("p");
    p.innerHTML = `<strong>${title}</strong>: ${info}`;
    return p;
}
}

const birds = [];
birds.push(new Bird("Blue Jay", "9-12 inches", "7 years", "acorns, nuts, insects", "Mixed forest", "blue-jay.jpg", "These are highly intellegent birds that can mimic other bird calls!"));
birds.push(new Bird("Robin", "9-12 inches", "2-6 years", "insects", "Forest", "robin.jpg", "They are seen as a sign of spring in North America!"));
birds.push(new Bird("Hummingbird", "2.5 inches", "3-5 years", "Nectar (sugar water)", "Trees", "hummingbird.jpg", "They are the only bird that can fly backwards!"));
birds.push(new Bird("Cardinal", "8-9 inches", "3 years", "Seeds, fruits, insects", "Trees, woodlands", "cardnial-bird.jpg", "They are know for there famous red color!"));


birds.forEach((bird)=>{
document.getElementById("bird-list").append(bird.item);
});

