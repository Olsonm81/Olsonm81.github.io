/*This works, but this code is from the video that portia made and is not of my own*/
/*I was unable to solve it so I looked back at the video and found how to prevent the default and send it to the server*/
const showEmailResult = async (e) => {
    e.preventDefault();
    
    const result = document.getElementById("result");
    result.classList.remove("hidden");
    result.innerHTML = "Sending information to server...";
    let response = await getEmailResult();
    if(response.status == 200) {
        result.innerHTML = "Sent";
    } else {
        result.innerHTML = "not sent";
    }
};

const getEmailResult = async (e) => {
    const form = document.getElementById("contact-form");
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:json
        });

        return response;
    } catch(error){
        console.log(error);
        result.innerHTML = "Sorry, your email couldn't be sent";
    }
}

document.getElementById("contact-form").onsubmit = showEmailResult;