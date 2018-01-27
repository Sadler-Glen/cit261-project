// Functional-shared Instantiation
// implement a constructor function
var btn = document.getElementById("btn07");
btn.addEventListener("click", function () {
    var Pizza = function (crust, toppings, hasBacon){
        //create an empty object
        var object = {};
        // assign properties
        object.crust = crust;
        object.toppings = toppings;
        object.hasBacon = hasBacon;
        // Method / Function
        object.amountToppings = pizzaMethod.amountToppings;
        return object;
    };
        var pizzaMethod = {};
        pizzaMethod.amountToppings = function () {
            return this.toppings;
        };
    // instantiate a new object
    var hawaiian = Pizza("crust", 3, true);

    // output to webpage the newly instantiated pizza
   document.getElementById("pizza_07").innerHTML = "Crust: " + hawaiian.crust +", "
   + "Toppings: " + hawaiian.amountToppings() + ", " + "Bacon: " + hawaiian.hasBacon ;
    btn07.classList.add("hide-btn");
});



