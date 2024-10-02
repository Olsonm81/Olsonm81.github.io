//every 1 sec go through and move through the class of highlighted the the gallery
//Prefered soultion
/*
setInterval(() =>{
   //console.log("hi");
   let currentSection = document.querySelector(".items section.highlighted");

   if(currentSection == null) {
        document.querySelector(".items section:first-child").classList.add("highlighted");
        return;
   }

   let nextSection = currentSection.nextElementSibling;


   //hit the end
   if(nextSection == null) {
        nextSection = document.querySelector(".items section");
   }
   
   currentSection.classList.remove("highlighted");
   nextSection.classList.add("highlighted");

}, 250);*/

let count=1;

setInterval(()=> {
    //Remove all of the highlighted
    document.querySelectorAll(".items section").forEach((section)=> {
        section.classList.remove("highlighted");
    });

    //add highlighting to the section with the current count
    document.querySelector(`.items section:nth-child(${count})`).classList.add("highlighted");
    count++;

    //If you reach the end of the list of sections
    if(count == document.querySelectorAll(".items section").length){
        count=1;
    }


},250)