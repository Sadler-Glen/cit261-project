function manipulate_01() {
    // DOM Maniplulation_01:
    // In this code we will create an element i.e., a
    // new div and give it some content and insert the
    // new div in a specific place in the DOM and also
    // change the heading text from DOM Changes to 
    // DOM Manipulation and display it to the web page
    var btn01 = document.getElementById("btn01");
    // create a new div element 
    var newDiv = document.createElement("div");
    // and add some content to to the div (translation is "Long life to all")
    var newContent = document.createTextNode("Kia ora koutou katoa!");
    // add the text node to the newly created div
    newDiv.appendChild(newContent);

    // add the newly created element and its content into the DOM before <div id="div1"> 
    var currentDiv = document.getElementById("div1");
    document.querySelector(role = "main").insertBefore(newDiv, currentDiv);

    // change heading from "DOM Changes!" to "DOM Manipulation!"
    var myHeading = document.getElementById("dom-manipulate");
    myHeading.textContent = "DOM Manipulation!";
    btn01.classList.add("hide-btn");
}

function manipulate_02() {
    // DOM Manipulation_02:
    // DOM Append a new li in the DOM
    var btn02 = document.getElementById("btn02");
    // create a new li element 
    var newLi = document.createElement("li");
    // add the new li into the DOM
    var list = document.getElementById("main").getElementsByTagName("ol")[0];
    list.appendChild(newLi);
    // add text to the li
    newLi.innerHTML = "This is Line 5";
    btn02.classList.add("hide-btn");
}

function manipulate_03() {
    // DOM Manipulation_03:
    // DOM - Remove first li from the DOM
    var btn03 = document.getElementById("btn03");
    var list = document.getElementById("ourList");
    // remove first li
    list.removeChild(list.getElementsByTagName("li")[0]);
    btn03.classList.add("hide-btn");
}

function manipulate_04() {
    // DOM Manipulation_04:
    // Insert li in the DOM and specifically before
    // li in the first position
    var btn04 = document.getElementById("btn04");
    // create a new li element 
    var newLi = document.createElement("li");
    var list = document.getElementById("ourList");
    // create text to display at li
    newLi.innerHTML = "This is Line 1";
    // insert li in the first position
    list.insertBefore(newLi, list.getElementsByTagName("li")[0]);
    btn04.classList.add("hide-btn");
}

