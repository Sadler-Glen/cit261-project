// Use the geo location  service built into the browser to
// locate the current location longitude and latitude
// The getlocation() function will be called from an onload
// event generated from index.html
var x = document.getElementById("gpscoords");
function getLocation() {
	fadeIn();
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	} else {
		x.innerHTML = "Geolocation is not supported by this browser.";
	}
}

function showPosition(position) {
	var lat = Math.round(position.coords.latitude*10)/10;
	var lon = Math.round(position.coords.longitude*10)/10;
	x.innerHTML = "Lat: " + lat + " / Lon: " + lon;
	showData(lat, lon);
}

// var btn = document.getElementById("btn");
// btn.addEventListener("click", function () {
// AJAX Asynchronus, Javascript, And XML (We use JSON)
// create a new variable and set a new
// instance of XMLHttpRequest
function showData(lat, lon) {
	document.getElementById("alert").innerHTML = "";
	var city = document.getElementById("city").value;
	var api_id = "e10b98b0f39c7d3653ea2d4b88af4ddd";
	var type = "accurate";
	var units = "metric";
	
	// if(city != ''){
	var dataRequest = new XMLHttpRequest();
	// Setup to receive data from the URL
	var myAddress =
	"http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" +  lon +
	"&type=" + type + "&units=" + units + "&appid=" + api_id;
	// var myAddress = 'http://api.openweathermap.org/data/2.5/weather?q='+ city +
	//                 '&type=accurate&units=metric&appid='+ api_id +'';
	dataRequest.open("GET", myAddress, true);
	dataRequest.onload = function() {
		// if (dataRequest.status >= 200 && dataRequest.status < 400)
		if (this.readyState == 4 && this.status == 200) {
			// convert JSON object to javascript object
			var weatherData = JSON.parse(dataRequest.responseText);
			// check for browser support of storage if not
			// alert the user that it is not avalable
			if (typeof Storage !== "undefined") {
				//convert javascript object to JSON object to be able
				//to store as localStorage
				localStorage.setItem("myData", JSON.stringify(weatherData));
			} else {
				alert("There is no storage available");
			}
			// retrieve local storage and convert JSON object to
			// javascript object in preparation to display to the
			// webpage
			var newWeatherData = JSON.parse(localStorage.getItem("myData"));
			writeData(newWeatherData);
		} else {
			document.getElementById("alert").innerHTML =
			"City is not found - Please check spelling";
			// weather.insertAdjacentHTML('beforeend', 'City is not found - Please check spelling');
			// return;
		}
		// } else{
		//     document.getElementById('alert').innerHTML = 'City Cannot be empty';
		
		// weather.insertAdjacentHTML('beforeend', 'City cannot be empty - Please re-enter');
		// return;
	};
	
	// sent our request for data
	dataRequest.send();
	// btn.classList.add("hide-btn");
}

var btn = document.getElementById("btn");
btn.addEventListener("click", function() {
	// AJAX Asynchronus, Javascript, And XML (We use JSON)
	// create a new variable and set a new
	// instance of XMLHttpRequest
	document.getElementById("alert").innerHTML = "";
	var city = document.getElementById("city").value;
	
	if (city != "") {
		var dataRequest = new XMLHttpRequest();
		// Setup to receive data from the URL
		var myAddress =
		"http://api.openweathermap.org/data/2.5/weather?q=" +
		city +
		"&units=metric&appid=e10b98b0f39c7d3653ea2d4b88af4ddd";
		dataRequest.open("GET", myAddress, true);
		dataRequest.onload = function() {
			// if (dataRequest.status >= 200 && dataRequest.status < 400)
			if (this.readyState == 4 && this.status == 200) {
				// convert JSON object to javascript object
				var weatherData = JSON.parse(dataRequest.responseText);
				// check for browser support of storage if not
				// alert the user that it is not avalable
				if (typeof Storage !== "undefined") {
					//convert javascript object to JSON object to be able
					//to store as localStorage
					localStorage.setItem("myData", JSON.stringify(weatherData));
				} else {
					alert("There is no storage available");
				}
				// retrieve local storage and convert JSON object to
				// javascript object in preparation to display to the
				// webpage
				var newWeatherData = JSON.parse(localStorage.getItem("myData"));
				writeData(newWeatherData);
			} else {
				document.getElementById("alert").innerHTML =
				"City is not found - Please check spelling";
				// weather.insertAdjacentHTML('beforeend', 'City is not found - Please check spelling');
				// return;
			}
		};
	} else {
		document.getElementById("alert").innerHTML = "City Cannot be empty";
		
		// weather.insertAdjacentHTML('beforeend', 'City cannot be empty - Please re-enter');
		// return;
	}
	
	// sent our request for data
	dataRequest.send();
	// btn.classList.add("hide-btn");
});

function writeData(data) {
	// document.getElementById("weather").innerHTML = "";
	// var htmlString = "";
	//    for (i = 0; i < data.length; i++) {
	//        htmlString += "<p>" + data[i].lname + ", "
	//                + data[i].fname + " - Business: "
	//                + data[i].business + ".";
	//    }
	// Main Data

	var cityName = data.name;
	var countryName = data.sys.country;
	var lat1 = data.coord.lat;
	var lon1 = data.coord.lon;
	var climate = data.weather[0].main;
	var icon = data.weather[0].icon;
	var description = data.weather[0].description;
	var temp = Math.round(data.main.temp);
	var pressure = Math.round(data.main.pressure);
	var humidity = data.main.humidity;
	var temp_min = Math.round(data.main.temp_min);
	var temp_max = Math.round(data.main.temp_max);
	var wind_speed = Math.round(3.6 * data.wind.speed * 10) / 10;
	var wind_deg_1 = data.wind.deg;
	var wind_deg = degreesToDirection(data.wind.deg);
	var sunrise = convertToTime(data.sys.sunrise, data.sys.sunset);
	document.getElementById;
	var x = document.getElementById("gpscoords");
	x.innerHTML = "Lat: " + lat1 + " | Lon: " + lon1;
	var el = document.createElement("img");
	
	document.getElementById("temperature").innerHTML = temp + "&deg;";
	document.getElementById("mycity").innerHTML = cityName;
	document.getElementById("humidity").innerHTML = humidity + "%";
	document.getElementById("windspeed").innerHTML = wind_speed + "<br />kp/h";
	document.getElementById("hilotemp").innerHTML =
	temp_min + "&deg;" + " | " + temp_max + "&deg;";
	document.getElementById("wdescription").innerHTML = description;
	document.getElementById("tempunit").innerHTML = "c";
	document.getElementById("direction").innerHTML = wind_deg;
	document.getElementById("apressure").innerHTML =
	pressure + "hPa<br/>pressure";
	document.getElementById("wicon").appendChild(el);
	
	// el.src = "./content/img/icons/" + icon + ".png";

	document.getElementById("wicon").src = "./content/img/icons/" + icon + ".png";
	
	// el.src = "./content/img/icons/" + icon + ".png";
	
	var wicon =
	'<img class="myweathericon" src="./content/img/icons/' + icon + '.png">';
	
	document.getElementById("wicon").innerHTML = wicon;
	
	// select background according to weather
	switch (climate) {
		case "Thunderstorm":
		document.getElementById("body").style.backgroundImage =
		"url('./content/img/thunderstorm.png')";
		break;
		case "Drizzle":
		document.getElementById("body").style.backgroundImage =
		"url('./content/img/mist.png')";
		break;
		case "Rain":
		document.getElementById("body").style.backgroundImage =
		"url('./content/img/rain.png')";
		break;
		case "Snow":
		document.getElementById("body").style.backgroundImage =
		"url('./content/img/snow.png')";
		break;
		case "Mist":
		document.getElementById("body").style.backgroundImage =
		"url('./content/img/mist.png')";
		break;
		case "Clear":
		document.getElementById("body").style.backgroundImage =
		"url('./content/img/clear_sky.png')";
		break;
		case "Clouds":
		document.getElementById("body").style.backgroundImage =
		"url('./content/img/cloudy.png')";
		break;
		// case "Extreme":
		//     document.getElementById("body").style.backgroundImage = "url('./content/img/xtreme.png')";
		//     break;
		// case "Additional":
		//     document.getElementById("body").style.backgroundImage = "url('./content/img/other.png')";
		//     break;
	}
	
	// document.getElementById("climate_bg").innerHTML = "<img src='./content/img/icons/" + icon +".png'>";
	
	// htmlString = "Current Weather for <h1>" + data.name + ", " + data.sys.country + "</h1><br />" +
	//         "Weather: &#09;" + data.weather[0].main + "<br />" +
	//         // "Description: <h1><img src='http://openweathermap.org/img/w/" + icon +".png'>" + description + "</h1><br />" +
	//         "Description: <h1><img src='./content/img/icons/" + icon +".png'>" + description + "</h1><br />" +
	//         "Temperature: <h1>" + temp + "&degC" + "</h1><br />" +
	//         "Pressure: " + pressure + "hPa" + "<br />" +
	//         "Humidity: " + data.main.humidity +"%" + "<br/>" +
	//         "Min. Temp: "+ temp_min +"&degC" + "<br/>" +
	//         "Max. Temp: "+ temp_max +"&degC" + "<br/>" +
	//         "Wind Speed: "+ wind_speed +"m/s" + "<br/>" +
	//         "Wind Direction: "+ wind_deg +"" ;
	//         weather.insertAdjacentHTML('beforeend', htmlString);
}

function writeForecast() {
    var cityName = data.name;
	var countryName = data.sys.country;
	var lat1 = data.coord.lat;
	var lon1 = data.coord.lon;
	var climate = data.weather[0].main;
	var icon = data.weather[0].icon;
	var description = data.weather[0].description;
	var temp = Math.round(data.main.temp);
	var pressure = Math.round(data.main.pressure);
	var humidity = data.main.humidity;
	var temp_min = Math.round(data.main.temp_min);
	var temp_max = Math.round(data.main.temp_max);
	var wind_speed = Math.round(3.6 * data.wind.speed * 10) / 10;
	var wind_deg_1 = data.wind.deg;
	var wind_deg = degreesToDirection(data.wind.deg);
	var sunrise = convertToTime(data.sys.sunrise, data.sys.sunset);
	document.getElementById;
	var x = document.getElementById("gpscoords");
	x.innerHTML = "Lat: " + lat1 + " | Lon: " + lon1;
	var el = document.createElement("img");    
}

function degreesToDirection(degrees) {
	var range = 360 / 16;
	var low = 360 - range / 2;
	var high = (low + range) % 360;
	var angles = [
		"N",
		"NNE",
		"NE",
		"ENE",
		"E",
		"ESE",
		"SE",
		"SSE",
		"S",
		"SSW",
		"SW",
		"WSW",
		"W",
		"WNW",
		"NW",
		"NNW"
	];
	for (i in angles) {
		if (degrees >= low && degrees < high) return angles[i];
		low = (low + range) % 360;
		high = (high + range) % 360;
	}
	return angles[i];
}

function convertToTime(sunrise, sunset) {
	var myDate1 = new Date(1000 * sunrise);
	var myDate2 = new Date(1000 * sunset);
	console.log(myDate1);
	console.log(myDate2);
	var sr_hrs = myDate1.getHours();
	var sr_mins = myDate1.getMinutes();
	var sr_secs = myDate1.getSeconds();
	var sr_time = sr_hrs + ":" + sr_mins + ":" + sr_secs + "<br/>sunrise";
	
	document.getElementById("srise").innerHTML = sr_time;
	
	var ss_hrs = myDate2.getHours();
	var ss_mins = myDate2.getMinutes();
	var ss_secs = myDate2.getSeconds();
	var ss_time = ss_hrs + ":" + ss_mins + ":" + ss_secs;
	
	document.getElementById("sset").innerHTML = ss_time + "<br/>sunset";
}

function toggleNav() {
	document.getElementById("nav").classList.toggle("nomenu");
	document.getElementById("nav").classList.toggle("menu");
	// document.getElementById("main").style.backgroundImage = "url('../content/img/rain.png')";
}

function fadeIn(){
	var el1 = document.getElementById("cont1");
	var el2 = document.getElementById("cont2");
	
	if(el1.style.opacity = 0){
		el1.style.transition = "opacity 3.0s ease-out 0s";
		el1.style.opacity = 1;
	} else {

	if(el1.style.opacity = 1){
		el1.style.transition = "opacity 1.0s ease-in 0s";
		el1.style.opacity = 0;
		el1.style.transition = "opacity 3.0s ease-in 0s";
		el1.style.opacity = 1;
		
	}
}

	if(el2.style.opacity = 0){
		el2.style.transition = "opacity 3.0s ease-out 0s";
		el2.style.opacity = 1;
	} else{

	if(el2.style.opacity=1)	{
		el2.style.transition = "opacity 3.0s ease-in 0s";
		el2.style.opacity = 0;
		el2.style.transition = "opacity 3.0s ease-in 0s";
		el2.style.opacity = 1;
	}
}
	
	// el1.style.transition = "opacity 1.0s ease-out 0s";
	// el1.style.opacity = 0;

    // el1.style.transition = "opacity 1.0s ease-in 0s";
	// el1.style.opacity = 1;

	// el2.style.transition = "opacity 3.0s ease-out 0s";
	// el2.style.opacity = 0;

	// el2.style.transition = "opacity 3.0s ease-in 0s";
	// el2.style.opacity = 1;
}
