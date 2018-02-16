// The following 3 functions are used to manipulate the class for the video
// to resize the video
function smaller(){
    var divElement = document.querySelector("#video");
    divElement.classList.remove('original');
    divElement.classList.add('smaller');    
    divElement.classList.remove('larger');   
}

function larger(){
    var divElement = document.querySelector("#video");    
    divElement.classList.add('larger');
    divElement.classList.remove('smaller');
    divElement.classList.remove('original');
}

function original(){
    var divElement = document.querySelector("#video");
    divElement.classList.add('original');
    divElement.classList.remove('smaller');
    divElement.classList.remove('larger');
}

// Animation using canvas
var twoPI = Math.PI * 2; 
function doAnimation(){
    var canvas = document.getElementById('myCanvas'),
        ctx = canvas.getContext("2d");
           
    // set start point for white circle to
    // enter the canvas
    var x = 0;
    var y = 250;
    // white circle will travel to center of
    // canvas (250px) on the x-axis at a rate 
    // of 5px per second and then down
    // on the y-axis at a rate of 5px per second
    setInterval(function(){        
        x += 5;
        if(x > 250){
            y += 5;
            x = 250;
        }
        // Gives a trail effect at the end of 
        // our moving object.
        // The color of canvas set to black with the
        // opacity being set to .05 to help
        // with that effect
        ctx.fillStyle = 'rgba(0,0,0,0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        // set color of circle to white
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(x, y, 50, 0, twoPI, false);
        ctx.fill();       
    }, 30); // setInterval set 30 milliseconds
};


