/*Toggle the navagation on smaller screens*/
/*Was not able to complete it this week, but will have it next week*/
const getLocations = async() => {
    const url = "./locations.json";

    try {
        const response = await fetch(url);
        console.log(response);
        const data = await response.json();
        console.log(data);
        return data;
    } catch(error){
        console.log(error);
    }
};
getLocations();
