// Pseudo classical Instantiation
// implement a constructor function
var btn = document.getElementById("btn06");
btn.addEventListener("click", function () {
    
    var Pizza = function (crust, toppings, hasBacon){
    // var this = Object.create(Pizza.prototype) is automatically
    // created by the interpreter
        
        // assign properties using the this. notation
        this.crust = crust;
        this.toppings = toppings;
        this.hasBacon = hasBacon;
        // the return this is automatically created by the interpreter
    };
    //methods for fallback are automatically created by the interpreter.
    // Pizza.prototype = {};
    Pizza.prototype.amountToppings = function(){
        return this.toppings;
    };
    
    // instantiate an new object with the new keyword
    var hawaiian = new Pizza("crust", 3, true);

    // output to webpage the newly instantiated pizza
   document.getElementById("pizza_06").innerHTML = "Crust: " + hawaiian.crust + ", "
   + "Toppings: " + hawaiian.amountToppings() + ", " + "Bacon: " + hawaiian.hasBacon ;
    btn06.classList.add("hide-btn");
});
