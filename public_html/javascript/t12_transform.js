// Topic 12 Transformations
function transform(){
   var myVar = setInterval(startTransform, 2500); 
}

function startTransform() {
    var el = document.querySelector("div.box");

    if (el) {
        el.className = "box1";
    } else {
        el = document.querySelector("div.box1");
        el.className = "box";
    }
    return el;
}

function rotate3d(){
    var el = document.querySelector("div.child2");

    if (el) {
        el.className = "child";
    } else {
        el = document.querySelector("div.child");
        el.className = "child2";
    }
    return el;
}
