/* Input: The weather
 * Processing: Decide footwear based on weather
 * with the choice or hot, rain, snow, any
 * other text will yeild shoesr
 * Output: The footwear based on weather
 */
function Footwear() {
    var footwear;
    var weather = document.getElementById("weather").value;

    if (weather === "hot" || weather === "Hot" || weather === "HOT") {
        footwear = "sandals";
    } else if (weather === "rain" || weather === "Rain" || weather === "RAIN") {
        footwear = "galoshes";
    } else if (weather === "snow" || weather === "Snow" || weather === "SNOW") {
        footwear = "boots";
    } else
        footwear = "shoes";

    document.getElementById('footwearDiv').innerHTML = "Based on the weather today, you really need to wear " + footwear + ".";
}