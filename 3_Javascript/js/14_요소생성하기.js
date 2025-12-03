const createBox = document.querySelector("#createBox");
const container = document.querySelector(".container");

createBox.addEventListener("click", () => {
    
    // 1. div 요소 생성
    const box = document.createElement("div");
    // 이제 box 안에는 <div></div> 가 들어가 있게 됨
    console.log(box);

    // 2. 만들어진 div 요소에 "box" 클래스 추가
    box.classList.add("box");
    // .classList : class 명을 배열형태로 지정 가능
    //  이제 box 의 모양은 <div class="box"></div>
    console.log(box);

    // 3. input 요소 생성 + 속성 부여
    const input = document.createElement("input"); // <input>
    input.type = "text"; // <input type = "text">

    // 4. 생성된 input 위 box 마지막 자식으로 추가
    box.append(input);
    /*
    <div class = "box">
        <input type = "text"
    </div>
    */

    // 5. 만들어진 div 요소 container 마지막 자식으로 추가
    container.append(box);

    // ** 요소.classList : 요소의 클래스 목록(배열)
    // -> 클래스 존재여부, 추가, 제거 등 가능
    // 요소.classList : 배열 형식으로 반환
    // 요소.classList.contains("클래스명") : 클래스 존재여부(true/false)
    // 요소.classList.add("클래스명") : 요소에 클래스명 추가
    // 요소.classList.remove("클래스명") :요소 내 해당 클래스 제거

    console.log(container.classList);

});
    // innerHTML 로 요소 추가
    document.querySelector("#innerHTMLBox").addEventListener("click", () => {
    container.innerHTML += "<div class='box'><input type='text'></div>";
    });