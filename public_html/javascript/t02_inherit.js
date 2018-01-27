// Inheritance
var btn = document.getElementById("btn03");
// Create object1 that has two properties a and b
// a is an array [1, 2, ,3 , 4]
// b is a number 1234
var object1 = {a: [1, 2, 3, 4], b: 1234};
// create object2 using the object.create() function
// with the prototype object1 which means that
// object 2 will inherit all the properties of object 1               
var object2 = Object.create(object1);
// Let's prove that. If I am to access object2.a
// it should be the same as object1.a, and in the same way
// object2.b should be the same as object1.b
btn.addEventListener("click", function () {
    document.getElementById("inheritanceDiv").innerHTML =
            "object1.a = " + "[" + object1.a + "]" + "<br>" +
            "object2.a = " + "[" + object2.a + "]" + "<br>" +
            "object1.b = " + object1.b + "<br>" +
            "object2.a = " + object2.b + "<br>";

    btn03.classList.add("hide-btn");
});
