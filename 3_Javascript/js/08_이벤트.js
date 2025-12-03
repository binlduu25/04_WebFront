// 인라인 이벤트 모델 확인

function check1(btn){

    console.log(btn);
    // 매개변수 btn : 클릭한 버튼(this)

    // 현재 버튼의 배경색을 얻어와 저장
    const bgColor = btn.style.backgroundColor;

    // 버튼이 클릭될 때마다 yellow <-> pink 변경
    if(bgColor == "yellow"){
        btn.style.backgroundColor = "pink";
    }else{
        btn.style.backgroundColor = "yellow";
    }
}

// -------------------------------------------------------------

// 고전 이벤트 모델 확인

// 아이디가 test1-1 인 요소를 얻어와 test1a 변수에 저장
const test1a = document.getElementById("test1-1");

// 고전 이벤트 모델 작성법
// 요소.이벤트리스너 = 이벤트핸들러

test1a.onclick = function(){
    alert("고전이벤트 모델 확인 버튼 클릭됨");
    }

// 고전 이벤트 모델 제거 
// 아이디가 test1-2 버튼 클릭 시
// 아이디가 test1-1 인 요소의 onclick 이벤트 리스너의 이벤트 핸들러 제거
document.querySelector("#test1-2").onclick = function(){
    // 기존 onclick 의 이벤트 핸들러(함수)를 null 로 덮어씌우기 (= 이벤트 제거)
    test1a.onclick = null;
    alert("test1-1 이벤트 제거됨")
}

// 고전 이벤트 모델 단점
    // #test1-3 요소를 얻어와 test1c 변수에 저장
    const test1c = document.querySelector("#test1-3");

    // test1c 요소가 클릭되었을 때 배경색 빨간색으로 변경
    test1c.onclick = function(){
        test1c.style.backgroundColor = "red";
    }

    // 한번 더 다른 이벤트를 주었을 때
    test1c.onclick = function(){
        test1c.style.color = "white";
    }
// 즉, onclick 에 저장된 값(이벤트 핸들러 함수)이 덮어씌워지면서
// 이전 코드 (배경색 red)가 사라지는 현상 발생

// -------------------------------------------------------------


// 표준 이벤트 모델 확인

const test2 = document.querySelector("#test2");
// ** 표준 이벤트 모델 작성법 ** //
// 요소.addEventListner( "이벤트종류", 이벤트핸들러(함수) );

test2.addEventListener("click",function(){
    // 클릭할수록 투명하게(1: 불투명 -> 0: 투명)
    
    // 현재 #test2 투명도 확인
    let curr = test2.style.opacity;
    console.log(curr); // 투명도 지정하지 않았을 시 콘솔 확인하면 빈 문자로 나온다
    if(curr == ''){ // 빈문자일 경우
        test2.style.opacity = 1; // 실제 요소에 1 대입
        curr = 1; // 변수에 1 대입
    }   
    // 1이 아닐 경우
    test2.style.opacity = curr - 0.1;

    // 완전히 투명해진다면 다시 불투명하게
    if(test2.style.opacity == 0){
        test2.style.opacity = 1;
    }
});

// #test2 요소 클릭 시 클릭 횟수 카운트
let count = 0;
test2.addEventListener("click",function(){
    count++;
    // 표준 이벤트 모델의 이벤트 핸들러 내부에서 this를 바로 불러서 쓸 수 있다
    // 이벤트 발생한 요소 자체가 넘어옴
    this.innerText = count;
    // this 를 사용하면 여기서 바로 #test2를 불러올 수 있다.
});



const test3 = document.getElementById("input3");
const test3a = document.getElementById("box3");

test3.addEventListener("keyup",function(e){
    if(e.key == "Enter"){
        test3a.style.backgroundColor = test3.value;
        test3.value="";
    }
});

test3a.addEventListener("click",function(e){
    // e 없이, 
    // alert(`배경색 : ${this.style.backgroundColor}`);

    console.log(e);
    alert(`배경색 : ${e.target.style.backgroundColor}`);
    //e.target : 이벤트가 발생한 대상 요소. this 와 같다
});