// JSON_parse
var btn = document.getElementById("btn01");
var string;
btn.addEventListener("click", function () {
    // initialise the variable 'string' as a JSON object 
    var string = '{"num":123, "str":"Convert JSON object to Javascript", \n\
    "bool":true,"o":{"x":1, "y":2}, "array":[1,2,3]}';

    // convert the JSON object to a Javascript object 
    // by the use of JSON.parse
    var obj = JSON.parse(string);

    // output the javascript object to the webpage
    document.getElementById("parse_01").innerHTML =
            "Javscript Object - num: " + obj.num + ", str: " + obj.str +
            ", bool: " + obj.bool + ", o: (x:" + obj.o.x + ", y:" +
            obj.o.y + "), array: [" + obj.array + "]";
    // hide the button
    btn01.classList.add("hide-btn");
});

