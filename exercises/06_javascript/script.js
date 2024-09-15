/*'let' use let becuase it has proper scoping*/
/*const*/ 
/*default var which means it never changes until you use let Most everything will be a const unless you have a for loop etc...*/
//Functions at the top
/*function doStuff() {
    alert("hello");
}*/

const doStuff = () =>{//Good if more then once
    alert("Hello World");
};

const myButton = document.getElementById("btn-click");
const myButton2 = document.getElementById("sec-button");
const myButton3 = document.getElementById("tri-button");
//myButton.onclick = doStuff; Only put () when you immedily want to call the ftn

myButton.onclick = () => {//Good for one context
    //alert("hello");
    document.getElementById("message").innerHTML = "Hello Everyone";
    document.getElementById("stuff").classList.add("special");
};
/*myButton.innerHTML = "Click Party";*/

//Add a second button, called say goodbye
//When clicked change the text to goodbye everyone, and remove the special styles
myButton2.onclick = () => {
    document.getElementById("stuff").classList.remove("special");
    document.getElementById("message").innerHTML = "Goodbye Everyone!";
};
myButton3.onclick = () => {
    document.getElementById("stuff").hidden;
};

/*Showing data from an input feild
document.getElementById("txt-first-name").onkeyup = () => {
    const textBox = document.getElementById("txt-first-name");
    document.getElementById("result").innerHTML = textBox.value;
}
*/


document.getElementById("txt-first-name").onkeyup = (event) => {
    console.log(event.target);
    document.getElementById("result").innerHTML = event.target.value;
}


