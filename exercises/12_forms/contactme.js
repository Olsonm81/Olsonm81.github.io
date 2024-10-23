
const sendEmail = async(json) => {
    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json"
            },
            body:json
        });

        return response;
    } catch(error){
        console.log(error);
        result.innerHTML = "Sorry, your email couldn't be sent";
    }
}



document.getElementById("contact-form").onsubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const fomrData = new FormData(form);
    const object = Object.fromEntries(fomrData);
    const json = JSON.stringify(object);
    const result = document.getElementById("result");

    result.innerHTML = "Sending...";
    console.log(json);
    const httpResult = await sendEmail(json);
    console.log(httpResult);

    if(httpResult.status == 200){
        result.innerHTML = "Email was successfully sent!";
    } else {
        result.innerHTML = "Email was not sent!";
    }
};