const boxes = document.getElementsByClassName("box");
const inputs = document.getElementsByClassName("color-input");

document.getElementById("changeButton").addEventListener("click", function(){
    for(let i = 0; i < inputs.length; i++){
        boxes[i].style.backgroundColor = inputs[i].value;
    }
});

