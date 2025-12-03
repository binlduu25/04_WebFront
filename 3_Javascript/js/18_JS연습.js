const fSize = document.querySelector("#f-size");
const fColor = document.querySelector("#f-color");
const printarea = document.querySelector("#print");
const writearea = document.querySelector("#writearea");

document.querySelector("#btn1").addEventListener("click", () => {
    writearea.style.color = fColor.value;
    writearea.style.fontSize = `${Number(fSize.value)}px`;       
});

    document.querySelector("#btn2").addEventListener("click", () => {
        const p = document.createElement("p");
        p.innerText = writearea.value;

        
        // *************************************************
        p.setAttribute("style", writearea.getAttribute("style"));
        // ************ 여기가 중요함 *************************


        printarea.append(p);
    });