/* Defining table for function doMult.
 * Input: user inputs the multiplication factor
 *
 * Processing: the random coded list Array with the multiplier is passed to the 
 * function multiply (list, multiplier).
 * The new array is returned to the function doMult()
 * 
 * Output: The original array and the new array are output to the user. 
 */
function doMult() {

    var factor = parseFloat(document.getElementById('factor').value);

    if (isNaN(factor)) {
        document.getElementById('factor').value = '"You must enter a number - Please Press Reset!"';
        return;
    } else {
        var list = [];

        for (var i = 0; i <= 4; ++i) {
            list[i] = Math.floor(Math.random() * 100); // create a random 5 element array
        }

        document.getElementById('origarray').value = "list[" + list + "]";

        var newlist = multiply(list, factor);

        document.getElementById('newarray').value = "list[" + newlist + "]";


    }
}

/* Defining table of function multiply (list, multiplier)
 * Input: The input of the array list[], and the multiplier are received from the function doMult()
 
 * Processing: The function multiply (list, multiplier) uses a for loop to move from element
 * to element and replace each element in the array with the product of the element and the
 * multiplier. The function also rounds only those products to 2 places if it has a decimal portion.
 * in the case of a multiplier having a decimal portion.
 * 
 * Output: the new list array is returned to the function doMult()
 */

function multiply(list, multiplier) {
    var p = multiplier;
    for (var i = 0; i <= list.length - 1; i++) {
        list[i] = (list[i] * p);
        if (list[i] > Math.floor(list[i])) {
            list[i] = list[i].toFixed(2);
        }

    }
    return list;
}

