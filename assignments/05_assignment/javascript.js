/*By Matthew Olson CSCE 242*/
/*Clicker script*/
const countVal = document.getElementById("count-val");
let counter = 0;
/*Adds one each time it is clicked and changes the number to reflect it*/
/*Works so if you click on the number it will change*/
countVal.addEventListener('click', () => {
  counter++;
  countVal.innerHTML = counter;
});

/*Random img on click script*/
const randImg = document.getElementById("random-img");
/*Reloads the entire page when clicking on the img*/
randImg.addEventListener('click', () => {
  location.reload();
});


/*Slider script*/
var slider = document.getElementById("range");
var img = document.getElementById("sliding-img");

slider.oninput = function() {
  /*Makes it so that when the screen is larger it goes to the end with the slider*/
  var newPosition = this.value*3.3;
  /*Used to ensure that when the screen is smaller that it doesn't go over the edge*/
  if (window.innerWidth <= 600) {
    newPosition = this.value*2;
  }
  /*The position of the img using px*/
  img.style.left = newPosition + "px";
  img.style.right = newPosition + "px";
}

