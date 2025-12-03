const addBtn = document.getElementById("add");
const calcBtn = document.getElementById("calc");
const container = document.querySelector(".container");

addBtn.addEventListener("click", () => {

    const row = document.createElement("div");
    row.classList.add("row");
    
    const input = document.createElement("input");
    input.type = "number"; // = input.setAttribute("type", "number");
    input.classList.add("input-number"); // = input.setAttribute("class", "input-number");

    const removeBtn = document.createElement("span");
    removeBtn.innerHTML = "&times";
    removeBtn.classList.add("remove-row");

    row.append(input, removeBtn);
    container.append(row);

    // 왜 addBtn 안에 작성하지?
    removeBtn.addEventListener("click", (e) => {
        const parent = e.target.parentElement; 
    parent.remove();

    }); 

}); 

calcBtn.addEventListener("click", () => {

    const inputList = document.querySelectorAll(".input-number");
    let sum = 0;
    for(let i = 0; i < inputList.length; i++){
        sum += Number(inputList[i].value);
    } 
    alert(`결과 : ${sum}`);
    /*const sumDisplayBox = calcBtn.nextElementSibling.append("div");
    sumDisplayBox.append(`결과 : ${sum}`);*/
    
});

