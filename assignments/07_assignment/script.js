const negNum = document.getElementById("wrong");
const space = document.getElementById("space");
//location.reload();


document.getElementById("draw-button").onclick = () => {
  const numStar = parseInt(document.getElementById("txt-star").value);
  //Clears the html each time so the stars do not stack each time the button is clicked
  negNum.innerHTML = ' ';
  space.innerHTML =' ';

  //console.log(numStar);
  if(numStar < 0 ) {
    //console.log(negNum.innerHTML);
    negNum.innerHTML = '* Invalid Input';
    //console.log(negNum.innerHTML);
    negNum.classList.remove("hidden");
  } else if (numStar >= 0 ) {
      negNum.classList.add("hidden");
  }
  /*for loops that adds the stars based on what number is entered*/
  for(let i = 0; i < numStar; i++) {
    //Starts by setting the postions to 0
    let rngTop = 0 + '%';
    let rngBottom = 0 + '%';
    let rngLeft = 0 + '%';
    let rngRight = 0 + '%';

    //Creates a new div for each star which creates a new star each time the loop is ran
    const star = document.createElement('div');
    star.classList.add('star');
    space.append(star);

    //This is the random element which ensures that although random that the stars will stay inside the box 
    //(I messed with it and when I had at 100 it would go outside)
    rngTop = Math.random() * 95 + '%';
    rngBottom = Math.random() * 95 + '%';
    rngLeft = Math.random() * 95 + '%';
    rngRight = Math.random() * 95 + '%';

    /*
    Testing to ensure the random worked
    console.log(rngTop);
    console.log(rngBottom);
    console.log(rngRight);
    console.log(rngLeft);
    */

    //using .style to change the var in the style.css to whatever the random number is
    star.style.setProperty("--rng-top-position", rngTop);
    star.style.setProperty("--rng-bottom-position", rngBottom);
    star.style.setProperty("--rng-left-position", rngLeft);
    star.style.setProperty("--rng-right-position", rngRight);
    //Alert  that occurs when clicking star has plus 1 since i starts at 0 and it would show star 0
    /*star.onclick = () => {
      negNum.innerHTML = `hi`;
    }*/
  };
    
}