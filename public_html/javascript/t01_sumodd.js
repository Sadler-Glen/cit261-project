
/* Defining table for outputting the sum of all odd integers 
 * between 1 and n, inclusive.
 * Input: User input a number "n"
 * Processing: provide a for loop to determine all the odd 
 * integers from 1 to n and sum them. Use the modulus operator
 * to determine whether the mumber is odd or even
 * Output: Sum of all odd integers from 1 to n, inclusive.
 */
function sumOdd() {
    // covert the input to an integer
    var n = parseInt(document.getElementById("numberBox").value);

    var sum = 0;
    //check for 0 or -ve numbers
    if (n <= 0) {
        return document.getElementById('sumoddDiv').innerHTML =
                "You must enter a Positive Integer";
    }
    // sum the odd numbers from 1 to n (user input) 
    for (var i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }
    // Output the sum to the outputDiv in the webpage
    document.getElementById('sumoddDiv').innerHTML = "The sum of all odd integers from 1 to " + n + " is " + sum;
}

