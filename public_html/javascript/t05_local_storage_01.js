//LocalStorage
var clientList = document.getElementById("retrieveLocalStorage");
var btn = document.getElementById("btn01");
btn.addEventListener("click", function () {
    // AJAX Asynchronus, Javascript, And XML (We use JSON)
    // create a new variable and set a new 
    // instance of XMLHttpRequest
    var dataRequest = new XMLHttpRequest();
    // Setup to receive data from a URL
    // create a random list using Filltext.com for my JSON file
    // this will create a random list of 10 names, businesses, 
    // addresses etc. This contains an array, numbers, and objects
    // within objects.
    dataRequest.open('GET', 'http://www.filltext.com/?rows=10&pretty=true\n\
        &ID={index}&fname={firstName}&lname={lastName}&business={business}&address={addressObject}', true);
    dataRequest.onload = function () {
        if (dataRequest.status >= 200 && dataRequest.status < 400) {
            // convert JSON object to javascript object
            var ourData = JSON.parse(dataRequest.responseText);            
            // check for browser support of storage if not
            // alert the user that it is not avalable
            if(typeof(Storage) !== "undefined"){
                //convert javascript object to JSON onject to be able
                //to store as localStorage
                localStorage.setItem('ourData',JSON.stringify(ourData));
            } else {
                alert("There is no storage available");
            }
            // retrieve local storage and convert JSON object to
            // javascript object in preparation to display to the
            // webpage
            var newData = JSON.parse(localStorage.getItem("ourData"));
            writeData(newData);
        } else {
            clientList.insertAdjacentHTML('beforeend', 'Connected, however an error is returned');
        }
    };
    // sent our request for data
    dataRequest.send();
    btn.classList.add("hide-btn");
});
// function to display client data to the webpage
function writeData(data) {
    var htmlString = "";
    for (i = 0; i < data.length; i++) {
        htmlString += "<p>" + data[i].lname + ", "
                + data[i].fname + " - Business: "
                + data[i].business + ".";
    }
    clientList.insertAdjacentHTML('beforeend', htmlString);
};