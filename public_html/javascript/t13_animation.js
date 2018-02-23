// T013 Animatition using keyframes
// This function will hide <div id=manipulate></div>
function animateIt(){
    document.getElementById("myHeading").classList.toggle("myHeading");
    document.getElementById("myContent").classList.toggle("myContent");
    document.getElementById("btn20").classList.toggle("btn20");
} 

// Animation with circle using keyframes
// Trigger circle animation by adding the circle.style.animation
// to the circle div
function startMove() {
    circle.style.animation = "animate_01 2.5s infinite ease normal";
//    circle.style.animation = "";
};
// stop animation by setting animation to ""
function stopMove() {
    circle.style.animation = "";
};

//T013 Animation using keyframes
// Animation with walking sprite
// Trigger sprite animation by adding the capGuy.style.animation
// to the capGuy div
function startWalk() {
    capGuy.style.animation = "walk-east 0.7s steps(8) infinite";
};
// stop animation by setting animation to ""
function stopWalk() {
    capGuy.style.animation = "";
};


