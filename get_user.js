function fetchData(id) {
    console.log(">>fetchData - id: " + id);
    return fetch("http://10.0.2.2:3000")
        .then(response => response.json())
        .then(responseJSON => {
            console.log(responseJSON);
            //let obj = JSON.parse(responseJSON);
            //console.log("ObjecT: " + obj);
            console.log("id: " + responseJSON["users"][0]["id"]);
            let responseString =    responseJSON["users"][0]["id"] + " - " + 
                                    responseJSON["users"][0]["name"] + " - " + 
                                    responseJSON["users"][0]["surname"];
            console.log("responseString: " + responseString);
            return responseString;
        })
        .catch(error => {
        console.error(error);
    });
}
    
export default { fetchData: fetchData };