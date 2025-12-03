const box = document.querySelector("#print-area");

document.querySelector("#set-btn").addEventListener("click", () => {
    box.style.width = `${document.querySelector("#width").value}px`;
    box.style.height = `${document.querySelector("#height").value}px`;
    box.style.backgroundColor = document.querySelector("#background-color").value;
    box.style.color = document.querySelector("#font-color").value;
    box.innerText = document.querySelector("#content").value;
    box.style.fontSize = `${document.querySelector("#font-size").value}px`;
    
    
    if(document.getElementsByName("font-weight").value[0]){
        box.style.fontWeight = "normal";
    } else{
        box.style.fontWeight = "bold";
    }

    
    
    

});