document.getElementById("form-raccoon").onsubmit = (e) => {
    //console.log("Submitting!");
    e.preventDefault();//This will say don't refresh the page
    const form = e.target;

    const raccoonName = form.elements["raccoon-name"].value;
    const demeanor = form.elements["demeanor"].value;
    const termsCheck = form.elements["terms"].checked;//Boolean can be used in if statement
    const size = getRadioValue("size");

    console.log(`${raccoonName} is  ${size} sized and has a ${demeanor} demeanor`);
    console.log(demeanor);
    console.log(termsCheck);
};

const getRadioValue = (radioName) => {
    const radios = document.getElementById(radioName);

    for(let i in radios) {
        if(radios[i].checked) {
            return radios[i].value;
        }
    }
    return "";
};