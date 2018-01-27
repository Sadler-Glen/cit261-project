// Prototypal Instantiation
// implement a constructor function
var btn = document.getElementById("btn05");
btn.addEventListener("click", function () {
    var Pizza = function (crust, toppings, hasBacon){
        //create an empty object using Object.create() function
        var object = Object.create(Pizza.prototype);
        // assign properties
        object.crust = crust;
        object.toppings = toppings;
        object.hasBacon = hasBacon;

        return object;
    };
    //methods for fallback are automatically created by the interpreter.
    // Pizza.prototype = {};
    Pizza.prototype.amountToppings = function(){
        return this.toppings;
    };
    
    // instantiate an new object
    var hawaiian = Pizza("crust", 3, true);

    // output to webpage the newly instantiated pizza
   document.getElementById("pizza_05").innerHTML = "Crust: " + hawaiian.crust + ", "
   + "Toppings: " + hawaiian.amountToppings() + ", " + "Bacon: " + hawaiian.hasBacon ;
    btn05.classList.add("hide-btn");
});


