
"use strict";

let button = document.getElementById("butt");
let text = document.getElementById("text");

button.addEventListener('mousemove',function() {
    button.style.background = "black";
    text.style.color = "white";
})

button.addEventListener('mouseout', function() {
    button.style.background = "white";
    text.style.color = "black";
})
