var pizzaWrite2 = document.getElementById("pizza");
var btn = document.getElementById("btn02");
btn.addEventListener("click", function () {
    var Pizza = {
        crust: 'thin',
        toppings: 3,
        hasBacon: true,
        // Method or Function
        amountToppings: function () {
            return this.toppings;
        }
    };

    writePizza(Pizza); // Call writePizza function

    // option 2: select each key/value discretely and 
    // write each value to pizza div
    pizzaWrite2.insertAdjacentHTML('beforeend', "Crust: " + Pizza.crust + "<br>");
    pizzaWrite2.insertAdjacentHTML('beforeend', "Topping: " + Pizza.toppings + "<br>");
    pizzaWrite2.insertAdjacentHTML('beforeend', "Has Bacon: " + Pizza.hasBacon + "<br>");
    pizzaWrite2.insertAdjacentHTML('beforeend', "amountToppings(): " + Pizza.amountToppings());

    //hide button
    btn02.classList.add("hide-btn");
});
// option 1: using a for...in to extract the values 
// and write to pizza div
function writePizza(Pizza) {
    var htmlString = "";
    var value = Pizza[key];
    for (var key in Pizza) {
        htmlString += "<p>" + Pizza[key];
    }
    pizzaWrite2.insertAdjacentHTML('beforeend', htmlString);
}




