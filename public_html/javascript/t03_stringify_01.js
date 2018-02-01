// JSON_stringify
var btn = document.getElementById("btn02");
var string;
btn.addEventListener("click", function () {
    // create the javascript object 'obj'
    var obj = {num:123, str:"Convert Javascript object to JSON object", bool:true,o:{x:1, y:2}, array:[1,2,3]};
    // convert the Javascript 'obj' to a JSON object
    // with the use of JSON.stringify
    var string = JSON.stringify(obj);

    // output the javascript object to the webpage. 
    document.getElementById("stringify_01").innerHTML =
            'JSON Object - num: ' + obj.num + ", str: " + obj.str +
            ", bool: " + obj.bool + ", o: (x:" + obj.o.x + ", y:" +
            obj.o.y + "), array: [" + obj.array + "]";
    btn02.classList.add("hide-btn");
});

