/* When the toggle-nav is clicked, toggle between showing andhiding the nav items*/
//document.getElementById("toogle-nav")

document.querySelector('#toggle-nav').onclick = () => {
   // console.log("hey!") use this to test to see if function is working
   document.getElementById("nav-items").classList.toggle('hidden-small');
};

/*Don't go to links  destination when clicked*/
document.getElementById("click-link").onclick = (event) => {
    event.preventDefault(); //don't go to the links destination
    //console.log("you clicked a link");
};

/*Change the ball color*/
document.getElementById("txt-color").onchange = (e) => {
    //console.log("hello");
    //console.log(e.target.value);
    //document.getElementById("ball").style.setProperty("background-color",e.target.value);
    document.querySelector(":root").style.setProperty("--ball-color", e.target.value);

};

/*move the ball down when button is clicked*/
let pos = 0;
document.getElementById("move-down").onclick = () => {
    pos++;
    //console.log(pos); testing it
    document.getElementById("ball").style.setProperty("top", pos + "px");
};

/*Show color message*/
document.getElementById("btn-show-color").onclick = () => {
    //console.log("yay");
    const color = document.getElementById("txt-enter-color").value.toLowerCase().trim();
    //console.log(color);
    const messageP = document.getElementById("color-message");
    //only make let if absolutly have to
    let mood = "";

    if(color == "red") {
        //messageP.innerHTML = "Red is for anger";
        mood = "angry";
    }
    else if(color == "blue") {
        //messageP.innerHTML = "Blue is for moods";
        mood = "moody";
    }
    else {
        //messageP.innerHTML = "Thats not a valid color!";
        mood ="undefinded";
    }

   // messageP.innerHTML = "You chose" + color + " so you are " + mood + ".";
   messageP.innerHTML = `You choose ${color} so you are ${mood}`;
};

/*Donations*/
/* Get the number
- If it is not a number or it is negative, show an error in the error
Otherwise First show the percent out of 10000 towards goal
Next show a visual representation with a box and gradiant*/
/*const goal = 10000;
let amount = 0;
document.getElementById("btn-donate").onclick = () => {
    const donationEntered = document.getElementById("txt-don");
    const donationMsg = document.getElementById("donation-Msg");

    let msg = "";

    if(donationEntered <= 0) {
        donationMsg = "That was not an acceptable donation";
    }
    else {
        amount = donationEntered + goal;
        msg = (donationEntered/goal)*100;
    }

};*/
/*answer*/
let donation =
document.getElementById("btn-donate").onclick = () => {
    const goal = 10000;
    const donation = document.getElementById("txt-donation").value;
    const error = document.getElementById("error-donation");
    error.innerHTML = ""; //clear previous error

    //if we got an invalid donation -> not a number or less than 0
    if(isNaN(donation) || donation <0) {
        error.innerHTML = "* Invalid";
        return;
    }
    const percentGoal = donation/goal *100;
    //console.log(perccentGoal + "%");
    document.querySelector(":root").style.setProperty("--funds", percentGoal + "%");
};
//E.target.innerHTMl equals small