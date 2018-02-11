// Transitions
function slideClosed(el){
    var element = document.getElementById(el);
    element.style.transition = "height 1.0s ease-out 0s";
    element.style.height = "0px";
}

function slideOpen(el){
    var element = document.getElementById(el);
    element.style.transition = "height 1.0s ease-in 0s";
    element.style.height = "200px";
}

function fadeIn(el){
    var element = document.getElementById(el);
    element.style.transition = "opacity 1.0s linear 0s";
    element.style.opacity = 1;
}

function fadeOut(el){
    var element = document.getElementById(el);
    element.style.transition = "opacity 1.0s linear 0s";
    element.style.opacity = 0;
}

function changeColor(el, color){
    var element = document.getElementById(el);
    element.style.transition = "background 1.0s linear 0s";
    element.style.background = color;
}

// Transformation
var loop;
var degrees = 0;

function rotateCW(img, speed){
    var image = document.getElementById(img);
    image.style.transform = "rotate("+degrees+"deg)";
    loop = setTimeout('rotateCW(\''+img+'\','+speed+')',speed);
    degrees++;
    if(degrees > 359){
        degrees = 1;
    }
    document.getElementById("status").innerHTML = "Rotation : "+degrees+"deg";
}

function rotateCCW(img, speed){
    var image = document.getElementById(img);
    image.style.transform = "rotate("+degrees+"deg)";
    loop = setTimeout('rotateCCW(\''+img+'\','+speed+')',speed);
    degrees--;
    if(degrees < -359){
        degrees = -1;
    }
    document.getElementById("status").innerHTML = "Rotation : "+degrees+"deg";
}

function rotateStop(){
    clearTimeout(loop);
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
    // of 20px per second and then down
    // on the y-axis at a rate of 3 pixels per second
    setInterval(function(){        
        x += 5;
        if(x > 250){
            y += 5;
//            x = 250;
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

// Animation with circle
// Trigger circle animation by adding animation into
// stylesheet
function startMove() {
    circle.style.animation = "animate_01 2.5s infinite ease normal";
//    circle.style.animation = "";
};
// stop animation by setting animation to ""
function stopMove() {
    circle.style.animation = "";
};

// Animation with walking sprite
// Trigger sprite animation by adding animation into
// stylesheet
function startWalk() {
    capGuy.style.animation = "walk-east 0.7s steps(8) infinite";
};
// stop animation by setting animation to ""
function stopWalk() {
    capGuy.style.animation = "";
};





