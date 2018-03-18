
// Use the geo location  service built into the browser to
// locate the current location longitude and latitude
// The getlocation() function will be called from an onload
// event generated from index.html
var x = document.getElementById("location");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    x.innerHTML = "Latitude: " + lat + 
    "<br>Longitude: " + lon;
    showData(lat, lon);
}


// var btn = document.getElementById("btn");
// btn.addEventListener("click", function () {
    // AJAX Asynchronus, Javascript, And XML (We use JSON)
    // create a new variable and set a new 
    // instance of XMLHttpRequest
function showData(lat, lon){
    document.getElementById('alert').innerHTML = '';
    var city = document.getElementById('city').value;
    var api_id = 'e10b98b0f39c7d3653ea2d4b88af4ddd'    
    var type = 'accurate';
    var units = 'metric';
    
    // if(city != ''){
        var dataRequest = new XMLHttpRequest();
        // Setup to receive data from the URL
        var myAddress = 'http://api.openweathermap.org/data/2.5/weather?lat='+ lat + '&lon='+lon+'&type='+ type +'&units='+units+'&appid='+ api_id +'';
        // var myAddress = 'http://api.openweathermap.org/data/2.5/weather?q='+ city +
        //                 '&type=accurate&units=metric&appid='+ api_id +'';
        dataRequest.open('GET', myAddress);
        dataRequest.onload = function () {            
            // if (dataRequest.status >= 200 && dataRequest.status < 400) 
            if (this.readyState == 4 && this.status == 200) {
                // convert JSON object to javascript object
                var weatherData = JSON.parse(dataRequest.responseText);
                // check for browser support of storage if not
                // alert the user that it is not avalable
                if(typeof(Storage) !== "undefined"){
                    //convert javascript object to JSON object to be able
                    //to store as localStorage
                    localStorage.setItem('myData',JSON.stringify(weatherData));
                } else {
                    alert("There is no storage available");
                }
                // retrieve local storage and convert JSON object to
                // javascript object in preparation to display to the
                // webpage
                var newWeatherData = JSON.parse(localStorage.getItem("myData"));
                writeData(newWeatherData);
            } else {
                document.getElementById('alert').innerHTML = 'City is not found - Please check spelling';
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
btn.addEventListener("click", function () {
    // AJAX Asynchronus, Javascript, And XML (We use JSON)
    // create a new variable and set a new 
    // instance of XMLHttpRequest
    document.getElementById('alert').innerHTML = '';    
    var city = document.getElementById('city').value;
    
    if(city != ''){
        var dataRequest = new XMLHttpRequest();
        // Setup to receive data from the URL
        var myAddress = 'http://api.openweathermap.org/data/2.5/weather?q='+ city +'&units=metric&appid=e10b98b0f39c7d3653ea2d4b88af4ddd'
        dataRequest.open('GET', myAddress);
        dataRequest.onload = function () {            
            // if (dataRequest.status >= 200 && dataRequest.status < 400) 
            if (this.readyState == 4 && this.status == 200) {
                // convert JSON object to javascript object
                var weatherData = JSON.parse(dataRequest.responseText);
                // check for browser support of storage if not
                // alert the user that it is not avalable
                if(typeof(Storage) !== "undefined"){
                    //convert javascript object to JSON object to be able
                    //to store as localStorage
                    localStorage.setItem('myData',JSON.stringify(weatherData));
                } else {
                    alert("There is no storage available");
                }
                // retrieve local storage and convert JSON object to
                // javascript object in preparation to display to the
                // webpage
                var newWeatherData = JSON.parse(localStorage.getItem("myData"));
                writeData(newWeatherData);
            } else {
                document.getElementById('alert').innerHTML = 'City is not found - Please check spelling';
                // weather.insertAdjacentHTML('beforeend', 'City is not found - Please check spelling');
                // return;
            }
            
        }
    } else{
        document.getElementById('alert').innerHTML = 'City Cannot be empty';
        
        // weather.insertAdjacentHTML('beforeend', 'City cannot be empty - Please re-enter');
        // return;
    };
    
    // sent our request for data
    dataRequest.send();
    // btn.classList.add("hide-btn");
});

function writeData(data) {
    document.getElementById("weather").innerHTML=""
    var htmlString = "";
    //    for (i = 0; i < data.length; i++) {
    //        htmlString += "<p>" + data[i].lname + ", "
    //                + data[i].fname + " - Business: "
    //                + data[i].business + ".";
    //    }
    
    // Main Data
    var cityName = data.name;
    var countryName = data.sys.country;
    var icon = data.weather[0].icon;
    var description = data.weather[0].description;
    var temp = data.main.temp;
    var pressure = data.main.pressure;
    var humidity = data.main.humidity;
    var temp_min = data.main.temp_min;
    var temp_max = data.main.temp_max;
    var wind_speed = data.wind.speed;
    var wind_deg = data.wind.deg;

    // Other Data
    // var lon = data.coord.lon;
    // var lat = data.coord.lat;
    // var cloudiness = data.clauds.value;
    // var cloudName = data.clouds.name;
    // var visibility = data.visibility; // meters
    // var precipitationValue = data.precipitation.value;
    // var precipitationMode = data.precipitation.mode;
    // var lastUpdate = data.lastupdate.value;
    
    // if( description = "clear sky"){
    //     document.getElementById("body").style.backgroundImage = "url('./content/img/clear_sky.png')";
    // }
    
    switch(description){
        case "clear sky":
            document.getElementById("body").style.backgroundImage = "url('./content/img/clear_sky.png')";
            break;
        case "few clouds":
            document.getElementById("body").style.backgroundImage = "url('./content/img/cloudy.png')";
            break;
        case "scattered clouds":
            document.getElementById("body").style.backgroundImage = "url('./content/img/cloudy.png')";
            break;
        case "overcast clouds":
            document.getElementById("body").style.backgroundImage = "url('./content/img/cloudy.png')";
            break;
        case "broken clouds":
            document.getElementById("body").style.backgroundImage = "url('./content/img/cloudy.png')";
            break;            
        case "shower rain":
            document.getElementById("body").style.backgroundImage = "url('./content/img/rain.png')";    
            break;
        case "light rain":
            document.getElementById("body").style.backgroundImage = "url('./content/img/rain.png')";    
            break;
        case "moderate rain":
            document.getElementById("body").style.backgroundImage = "url('./content/img/rain.png')";    
            break;            
        case "rain":
            document.getElementById("body").style.backgroundImage = "url('./content/img/rain.png')";
            break;
        case "thunderstorm":
            document.getElementById("body").style.backgroundImage = "url('./content/img/thunderstorm.png')";
            break;
        case "snow":
            document.getElementById("body").style.backgroundImage = "url('./content/img/snow.png')";
            break;
        case "sleet":
            document.getElementById("body").style.backgroundImage = "url('./content/img/snow.png')";
            break;    
        case "snow":
            document.getElementById("body").style.backgroundImage = "url('./content/img/snow.png')";
            break;
        case "mist":
            document.getElementById("body").style.backgroundImage = "url('./content/img/mist.png')";
            break;
    }


    htmlString = "Current Weather for <h1>" + data.name + ", " + data.sys.country + "</h1><br />" +
            "Weather: &#09;" + data.weather[0].main + "<br />" +
            "Description: <h1><img src='http://openweathermap.org/img/w/" + icon +".png'>" + description + "</h1><br />" +
            "Temperature: <h1>" + temp + "&degC" + "</h1><br />" +
            "Pressure: " + pressure + "hPa" + "<br />" +
            "Humidity: " + data.humidity +"%" + "<br/>" +
            "Min. Temp: "+ temp_min +"&degC" + "<br/>" +
            "Max. Temp: "+ temp_max +"&degC" + "<br/>" +
            "Wind Speed: "+ wind_speed +"m/s" + "<br/>" +
            "Wind Direction: "+ wind_deg +"&deg"  ;
            weather.insertAdjacentHTML('beforeend', htmlString);
}

function toggleNav(){
    document.getElementById("nav").classList.toggle("nomenu");
    document.getElementById("nav").classList.toggle("menu");
    // document.getElementById("main").style.backgroundImage = "url('../content/img/rain.png')";
}
