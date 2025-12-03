/* 1. 내가 한 방법

const keyQ = document.querySelector(".key-box > div:nth-child(1)");
const keyW = document.querySelector(".key-box > div:nth-child(2)");
const keyE = document.querySelector(".key-box > div:nth-child(3)");
const keyR = document.querySelector(".key-box > div:nth-child(4)");

document.addEventListener("keydown",function(e){
    if( (e.key == "q") || (e.key == "Q") ){
        keyQ.style.backgroundColor = "black";
        keyQ.style.color = "white";
    }document.addEventListener("keyup",function(){
        keyQ.style.backgroundColor = "white";
        keyQ.style.color = "black";
    });
});

document.addEventListener("keydown",function(e){
    if( (e.key == "w") || (e.key == "W") ){
        keyW.style.backgroundColor = "pink";
    }
    document.addEventListener("keyup",function(){
        keyW.style.backgroundColor = "white";
    });
});


document.addEventListener("keydown",function(e){
    if( (e.key == "e") || (e.key == "E") ){
        keyE.style.backgroundColor = "pink";
    }
    document.addEventListener("keyup",function(){
        keyE.style.backgroundColor = "white";
    });
});


document.addEventListener("keydown",function(e){
    if( (e.key == "r") || (e.key == "R") ){
        keyR.style.backgroundColor = "pink";
    }
    document.addEventListener("keyup",function(){
        keyR.style.backgroundColor = "white";
    });
});
*/


/* 2. 선생님 방법 1)

// 배열 형태로 key 값 얻기
const keys = document.querySelectorAll(".key");

// 화면에서 키가 눌러지는 걸 감지했을 때
document.addEventListener("keydown",function(e){
    
    let idx; // 인덱스 값 저장할 변수
    
    // 입력된 키를 소문자로 바꿔서 일치하는 case 실행
    switch(e.key.toLowerCase()){
        case 'q' : idx = 0; break;
        case 'w' : idx = 1; break;
        case 'e' : idx = 2; break;
        case 'r' : idx = 3; break;
        default : return; // 함수 종료
    }
    // idx 번호와 일치하는 keys 배열의 요소 배경색 변경
    keys[idx].style.backgroundColor = "black";
    keys[idx].style.color = "white";

});

// 화면에서 키가 떼어지는 걸 감지했을 때
document.addEventListener("keyup",function(e){
    let idx; 

    switch(e.key.toLowerCase()){
        case 'q' : idx = 0; break;
        case 'w' : idx = 1; break;
        case 'e' : idx = 2; break;
        case 'r' : idx = 3; break;
        default : return; 
    }

    keys[idx].style.backgroundColor = "white";
    keys[idx].style.color = "black";
});
*/

// 3. 선생님 방법 2) : 제일 깔끔
const keys = document.querySelectorAll(".key");

// KEY:VALUE 로 구성된 JS 객체 생성
 // JS 객체(Object)
 // 객체명[key] -> 매핑된 value
 // 객체명.key -> 매핑된 value
const keyMap = {'q':0, 'w':1, 'e':2, 'r':3};

// 키 색깔 변경할 함수 생성
function changeKeyColor(e, color){
    const idx = keyMap[e.key.toLowerCase()];
    // 위 코드는 변수 idx 에 keyMap 에서 (q,w,e,r) 에 각각 대응되는 숫자 0,1,2,3 대입
    if(idx != undefined){
        // keyMap 에 없는 값(q,w,e,r 이 아닌 다른 값) 들어온 건 제외하고 처리
        keys[idx].style.backgroundColor = color;
    }
}

document.addEventListener("keydown", (e) => changeKeyColor(e, "deepPink"));
document.addEventListener("keyup", (e) => changeKeyColor(e, "white"));


// 정리 등

    // 이벤트가 감지되었을 때 실행해야하는 함수(ex) changeKeyColor) 
    // 만약 해당 함수에 전달할 인자가 없는 경우 
    // -> 함수명만 써도 됨 ("keydown", changeKeyColor) 
    // -> changeKeyColor 함수 선언부의 매개변수에서 이벤트 객체 (e)를 
    //    가져다 쓸 수 있음

    // 만약 해당 함수에 전달할 인자가 있는 경우
    // -> 익명함수 형태로 작성할 것 (e) => {}
    // -> 전달인자의 1번째 값은 e를 넘겨주기, 2번째 전달인자부터 내가 전달하고싶은
    // 데이터 나열...
    // -> ("keydown", (e) => changeKeyColor(e, "deepPink")) 



/* 방법 4.

const keys = document.querySelectorAll(".key");
const keyMap = { q: 0, w: 1, e: 2, r: 3 };

document.addEventListener("keydown", handleKey);
document.addEventListener("keyup", handleKey);

function handleKey(e) {
    const idx = keyMap[e.key.toLowerCase()];
    if (idx === undefined) return;

// event.type이 'keydown'일 때만 색 변경, 아닐 땐 white로 복귀
    keys[idx].style.backgroundColor = e.type === "keydown" ? "deeppink" : "white";
}
*/