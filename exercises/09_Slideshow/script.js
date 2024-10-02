



/*
 Change which img currently has the class of hidden applied to it
 queryselector
 */
//const slideShow = document.getElementById("slideshow").innerHTML;
//console.log(slideShow);

const slide = () => {
    const currentImage = document.querySelector("#slideshow :not(.hidden)");//the not shows that it is not the class hidden
    let nextImg = currentImage.nextElementSibling;

    //Reached end of list
    if(nextImg == null) {
        nextImg = document.querySelector("#slideshow :first-child");
    }


    currentImage.classList.add("hidden");
    nextImg.classList.remove("hidden");


};

setInterval(slide, 1000);