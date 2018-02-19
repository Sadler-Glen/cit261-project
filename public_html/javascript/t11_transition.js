function interval(){
    var myVar = window.setInterval(updateTransition, 2500);
}

function updateTransition() {
  var el = document.querySelector("div.box");
   
  if (el) {
    el.className = "box2";
  } else {
    el = document.querySelector("div.box2");
    el.className = "box";
  }
   
  return el;
}



