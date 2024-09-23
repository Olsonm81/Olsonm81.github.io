/*By Matthew Olson CSCE 242*/
/*Don't go to links destination when clicked*/
document.getElementById('color-ex').onclick = (event) => {
    event.preventDefault();
};
document.getElementById('img-ex').onclick = (event) => {
    event.preventDefault();
};


/*Supposed to hide inital exercises, but was unable to get it to work so I just left it out*/
//document.getElementById("nav-ex").classList.toggle('hidden-small');
/*Smaller screen toggle nav*/
/*Uses if so when it is clicked again since it already is the down arrow it will change to the up*/
document.querySelector('#toggle-nav').onclick = () => {
    document.getElementById("nav-ex").classList.toggle('hidden-small');
    const arrowDirect = document.getElementById("arrow").innerHTML;
    
    document.getElementById("arrow").innerHTML = "▲";
    if (arrowDirect == "▲") {
        document.getElementById("arrow").innerHTML = "▼";
    };
};

/*Ensure that when clicking on exercise 1 color slider will appear and exercise 2 will do picture*/
/*Starts off by just having color slider then depending on which one is clicked it removes or adds
hidden to it*/
document.getElementById("picture-choose").classList.add('hidden');

document.querySelector('#img-ex').onclick = () => {
    document.getElementById("picture-choose").classList.remove('hidden');
    document.getElementById("color-slide").classList.add('hidden');
};
document.querySelector('#color-ex').onclick = () => {
    document.getElementById("color-slide").classList.remove('hidden');
    document.getElementById("picture-choose").classList.add('hidden');
}; 

/*Changes the color of the background based on where the slider was*/
document.getElementById("range").onchange = (e) => {
    const color = `rgb(${e.target.value}, 0, 0)`;
    document.getElementById("color-slide").style.setProperty("background-color",e.target.value);
    document.querySelector(":root").style.setProperty("--slider-background-color", color);
    /*if statements check the value of the slider and based on that it changes the txt at the bottom*/
    if(e.target.value <=50) {
        document.getElementById('color-p').innerHTML = "Its dark!";
    }
    else if(e.target.value > 51 || e.target.value <=150) {
        document.getElementById('color-p').innerHTML = "Its getting lighter!";
    }
    if(e.target.value > 151) {
        document.getElementById('color-p').innerHTML = "Its so bright!";
    }
};


/*Picture Chooser exercise*/
/*Each log is where I used to test the code in the console while making it once a button is clicked it will 
  get which button it was based on the text the button has inside. Using 'if' statements it then changes the src of
  the img to a large, med, or small one based on what button is selected*/
document.getElementById("buttons").onclick = (e) => {
    //console.log(e.target.innerHTML);
    if (e.target.innerHTML=='Small' ) {
       //console.log("IT WORKED");
        document.getElementById("rand-img").src ='https://picsum.photos/50/50';
    }
    else if (e.target.innerHTML=='Medium') {
        //console.log("IT WORKED for med");
        document.getElementById("rand-img").src ='https://picsum.photos/150/150';
    }
    else if (e.target.innerHTML == 'Large') {
        //console.log("IT WORKED for large");
        document.getElementById("rand-img").src ='https://picsum.photos/500/500';
    }
};
