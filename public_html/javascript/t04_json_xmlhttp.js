//JSON XMLHTTPRequest
var clientList = document.getElementById("clientList");
var btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    // AJAX Asynchronus, Javascript, And XML (We use JSON)
    // create a new variable and set a new 
    // instance of XMLHttpRequest
    var dataRequest = new XMLHttpRequest();
    // Setup to receive data from a URL
    // create a random list using Filltext.com for my JSON file
    // this will create a random list of 10 names, businesses, 
    // addresses etc.
    dataRequest.open('GET', 'http://www.filltext.com/?rows=10&pretty=true&ID={index}&fname={firstName}&lname={lastName}&business={business}&address={addressObject}');
    dataRequest.onload = function () {
        if (dataRequest.status >= 200 && dataRequest.status < 400) {
            var ourData = JSON.parse(dataRequest.responseText);
            writeData(ourData);
        } else {
            clientList.insertAdjacentHTML('beforeend', 'Connected, however an error is returned');
        }
    };

    // sent our request for data
    dataRequest.send();
    btn.classList.add("hide-btn");
});

function writeData(data) {
    var htmlString = "";
    for (i = 0; i < data.length; i++) {
        htmlString += "<p>" + data[i].lname + ", "
                + data[i].fname + " - Business: "
                + data[i].business + ".";
    }

    clientList.insertAdjacentHTML('beforeend', htmlString);
}