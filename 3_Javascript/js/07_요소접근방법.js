// 클래스로 요소 접근 테스트
function classTest(){
    // class 속성값이 cls-test인 요소 모두 얻어오기(DOM에서)
    const divs = document.getElementsByClassName("cls-test")
    console.log(divs);
    // 콘솔창 확인하면 배열과 비슷한 형식으로 얻어옴을 확인 가능
    // 진짜 배열은 아님 > 유사배열 : HTMLCollection, NodeList
    // 유사배열이란?
     // 배열처럼 index, length 를 가지고 있으나 배열 전용 함수 미제공
     // JS 내 제공 함수인 pop(), push(), map(), filter() .. 등등 사용 불가

    divs[0].style.backgroundColor = "red";
    // 자동완성 제공하지 않으니 유의
    divs[1].style.backgroundColor = "tomato";
    divs[2].style.backgroundColor = "pink";
    }

function tagNameTest(){
    const tagList = document.getElementsByTagName("li");
    console.log(tagList);
    for(let i = 0; i <= tagList.length; i++){
    tagList[i].style.backgroundColor = tagList[i].innerText;
    // 실행은 되지만 오류 왜 나지?
    // i번째 현재 접근중인 스타일 백그라운드의 색깔을 i번째 현재 접근중인 태그(li)내 innerText에 기입된 색깔코드로 넣겠다.
    }
}

function nameTest(){
    const hobList = document.getElementsByName("hobby");
    console.log(hobList);

    let str = ''; // 체크된 값 누적시킬 문자열 변수 빈문자열로 선언
    let count = 0; // 체크된 개수 카운트

    for(let i = 0; i < hobList.length; i++){
        // checkbox 와 radio 의 전용속성(checked)로 체크되었는지 되지 않았는지 확인
        // input요소.checked
         // check 시 true 아니면 false
        if(hobList[i].checked){
            str += hobList[i].value + " ";
            count++;
        }
    }

    // id가 name-div 요소에 내용으로 결과 출력
    document.getElementById("name-div").innerHTML 
    = `${str} <br><br>선택된 취미 개수 : ${count}`;

    // 요소.innerHTML
     // HTML 태그를 포함하여 작성한 '문자열'을 실제 HTML 요소로 해석하여 화면에 렌더링

    // 요소.innerText
     // 텍스트 내용만 요소 내부에 출력함(HTML 코드로 해석X)
}

function cssTest(){
    // target-div 속성 값이 css-div 요소 얻어오기
    // 사용자 정의 속성 얻어오기

    const container = document.querySelector("[target-div='css-div']");
    // 사용자 정의 속성이기에 query 를 통한 (= css 속성 선택자를 통한) 선택
    container.style.border = "10px solid red";

    // 첫번째 자식 div 를 접근
    // 하지만 nth-child 등을 통해 첫번째에 접근하지 않아도
    // queryselector 자체가 하나씩밖에 접근하기에 첫번째에 접근한다면 사용 안해도 무방
    const div1 = document.querySelector("[target-div='css-div'] > div");
    
    div1.innerText = "변경됨";

    const div2 = document.querySelector("[target-div='css-div'] > div:last-child");
    div2.innerText = "두번째 변경됨. 첫번째 요소가 아니면 querySelector 특징 이용 불가"

    // 모든 자식 div 한번에 선택(배열)
    const divList = document.querySelectorAll("[target-div='css-div'] > div");
    divList[0].style.fontFamily = "궁서";
    divList[1].style.fontSize = "20px";

    // 각각의 자식을 클릭했을 때 특정 메시지 팝업
    for(let i = 0; i < divList.length; i++){
        divList[i].onclick = function(){
            alert(`${i}번째 요소`);
        }
    }
}

// 카카오톡 채팅 만들기
function readValue(){
    // 채팅이 출력될 배경 요소 가져오기
    const bg = document.getElementById("chatting-bg");
    
    // 입력 요소 가져오기
    const input = document.getElementById("user-input");

    // 입력된 값이 없을 경우
     // 1) 값이 없는 경우
     // 2) 공백만 있는 경우

    // 문자열.trim() : 문자열 좌우 공백 제거 
    if(input.value.trim().length == 0){ 
    // input에 들어온 값을 가져와 문자열 좌우 공백을 제거하고 길이를 봤을 때 0이다 
    // = 공백만 입력되었다. 또는 아예 공백이다. 
    // alert("채팅 내용을 입력해줏에ㅛ");
    input.value=""; // 입력란 초기화
    input.focus(); // input 커서 활성화
    return; // 함수 종료하여 아래 코드 실행시키지 않도록
    }

    bg.innerHTML += `<p><span>${input.value}</span></p>`;
    // ``(백틱) 안의 html 태그가 포함된 구문을 html 요소로써 해석하여 문서에 반영하기 위해서
    // innerHTML 을 사용하여야 하고, 연산자는 '=' 이 아닌 '+=' 으로 하나씩 추가를 해줘야
    // bg 요소 내 span 들을 제거하지 않고 위로 올려보내면서 맨 아래에 추가할 수 있다.

    // bg.scrollTop() : 현재 스크롤 위치. 스크롤이 현재 얼만큼 내려와 있는지 표시
    // bg.scrollHeight() : 현재 스크롤 전체 높이 표시. 스크롤바를 이용해 스크롤할 수 있는 전체 높이.
     // 아래 두 줄의 코드를 스크롤이 생길 때까지 테스트 해보면, scrollTop은 계속 0이고
     // scrollHeight 가 계속 높이가 증가함을 알 수 있다.
     // 즉, scrollTop 과 scrollHeight 가 같아진다면 입력하는 만큼 스크롤이 아래쪽에 붙어있게 된다.
    console.log(bg.scrollTop); 
    console.log(bg.scrollHeight);

    bg.scrollTop = bg.scrollHeight;
    input.value="";
    input.focus();

}

// enter 키 입력 시 메시지가 입력되게하는 법
 // 함수를 빠져나와 전역에서 작성
// keyup : 눌려지던 키가 떼어졌을 때. 즉, 올라왔을 때 
// keydown : 키가 눌러졌을 때( + 누르고 있으면 계속 인식됨)
// 키보드와 관련된 이벤트 많다
// input 에 사용된 onclick 역시 이벤트의 한 종류

document.querySelector("#user-input").addEventListener("keyup",function(e){
    // event 가 발생했을 때의 정보를 담고있는 이벤트 객체가 있다. 보통 매개변수 e 로 표현을 많이 한다.
    // test 후 콘솔에서 확인해보면 이벤트 정보를 확인 하고
    // '객체' 형태이므로 key:value 형태로 되어 있음을 확인할 수 있다.
    // 이때, enter는 key:Enter 형태로 저장되어 있음 역시 확인 가능
    if(e.key == "Enter"){readValue();}
    
});

// 종합 : 위 코드 해석
// 즉, user-input 내에서 이벤트(keyup)이 발생 시 매개변수 e를 통해 이벤트 객체를 확인하고 이 때 입력된 값이
// enter 일 때만 readvalue() 함수를 호출한다