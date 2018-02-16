// onclick, onmouseover, onmouseout, ontouchstart,
// ontouchend are used to trigger the following events
function slideClosed(el){
    var element = document.getElementById(el);
    element.style.transition = "all 2s";//"height 2.0s 3.0s ease 1s";
    element.style.height = "0px";
    element.style.width = "0px";
}

function slideOpen(el){
    var element = document.getElementById(el);
    element.style.transition = "all 2s";//"height 2.0s 3.0s ease 1s";
    element.style.height = "200px";
    element.style.width = "500px";
}

function fadeIn(el){
    var element = document.getElementById(el);
    element.style.transition = "all 2s";//"opacity 2.0s 3.0s ease 1s";
    element.style.opacity = 1;
}

function fadeOut(el){
    var element = document.getElementById(el);
    element.style.transition = "all 2s";//"opacity 2.0s 3.0s ease 1s";
    element.style.opacity = 0;
}

function changeColor(el, color){
    var element = document.getElementById(el);
    element.style.transition = "all 2s";//"background 2.0s 3.0s ease 1s";
    element.style.background = color;
}

// onkeyup and onblur trigger the following events
function validateFields(controlID){
    var control = document.getElementById(controlID);
    control.style.background = 'red';
    if(control.value === ""){
        control.style.background = 'red';
    }else{
        control.style.background = 'green';
    }
}

// Animation with circle
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

